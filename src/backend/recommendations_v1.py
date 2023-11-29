def get_recommendation_based_on_title(movie_title, num_recs, streaming_platforms):
    

    from tensorflow.keras import layers
    from tensorflow import keras
    import tensorflow as tf

    from sklearn.model_selection import train_test_split
    from ast import literal_eval

    import pandas as pd
    import numpy as np
    import re
    from sklearn.feature_extraction.text import TfidfVectorizer

    df = pd.read_csv('MERGE_WITH_STREAMING.csv')


    # Vector representation of categorical data
    from sklearn.feature_extraction import FeatureHasher

    def flatten_data(l):
        flattened = []
        for i in l:
            for j in i:
                flattened.append(j)
        return flattened

    df['genres']=df['genres'].str.replace(' ','')
    genres = df['genres'].str.split(',')

    #vectorize genres
    genre_vectorizer = FeatureHasher(n_features=len(set(flatten_data(genres.tolist()))), input_type='string')
    vectorized_genres = genre_vectorizer.transform(genres.tolist())
    vectorized_genres = vectorized_genres.toarray()


    df['genre_vectors']=pd.Series([vectorized_genres[i] for i in range(len(df))])


    from collections import Counter

    # Vectorize actors / Generate top Actors 

    df['actors']=df['actors'].str.replace(' ','').str.split(',')
    list_of_actors=df['actors'].tolist()

    actor_counts = Counter(flatten_data(list_of_actors))
    k = 1000  

    top_actors = []
    for i in actor_counts.most_common(k):
        top_actors.append(i[0])

    
    df['top_actors'] = [[actor for actor in actor_list if actor in top_actors] or ['Unknown'] for actor_list in list_of_actors]


    vectorized_actors = FeatureHasher(n_features=1000, input_type='string').transform(df['top_actors'])
    vectorized_actors = vectorized_actors.toarray()
    df['actors_vectorized']=pd.Series([vectorized_actors[i] for i in range(len(df))])
    

    # Vectorize Directors and generate top directors 
    df['directors']=df['directors'].str.replace(' ','')
    directors = df['directors'].str.split(',')
    list_of_directors=directors.tolist()


    director_counts = Counter(flatten_data(list_of_directors))
    k = 1000  # Number of top directors to consider

    top_directors = []
    for i in director_counts.most_common(k):
        top_directors.append(i[0])

    df['top_directors'] = [[director for director in director_list if director in top_directors] or ['Unknown'] for director_list in list_of_directors]


 
    vectorized_directors = FeatureHasher(n_features=1000, input_type='string').transform(df['top_directors'])
    vectorized_directors = vectorized_directors.toarray()
    df['directors_vectorized']=pd.Series([vectorized_directors[i] for i in range(len(df))])


    import nltk
    from nltk.corpus import wordnet
    from nltk.corpus import stopwords
    from nltk.tokenize import word_tokenize
    from nltk.stem import WordNetLemmatizer

    stop_words = set(stopwords.words('english'))
    lemmatizer = WordNetLemmatizer()

    def preprocess_text(text):
        if pd.isnull(text):
            return ''

        text = text.lower()
        text = re.sub('[^a-zA-Z]', ' ', text) # remove punctuation
        tokens = word_tokenize(text)
        # Remove stop words
        true_tokens = []
        for i in tokens:
            if i not in stop_words:
                true_tokens.append(i)
        # Lemmatize 
        tokens = []
        for i in true_tokens:
            tokens.append(lemmatizer.lemmatize(i))
        # Join tokens back into a string
        final_text = ' '.join(tokens)
        return final_text

    # Apply preprocessing to 'movie_info' column
    df['preprocessed_movie_info'] = df['movie_info'].apply(preprocess_text)

    # Vectorization using TF-IDF

    movie_info_vectors = TfidfVectorizer().fit_transform(df['preprocessed_movie_info'])

    movie_info=movie_info_vectors.toarray()
    df['info_vectors']=pd.Series(movie_info[i] for i in range(len(df)))

    # Similarity Score

    from sklearn.metrics.pairwise import cosine_similarity

    # Select the feature vector columns
    parameters = ['genre_vectors', 'actors_vectorized','directors_vectorized','info_vectors', ]
    # initialize similarities
    df['similarities'] = np.zeros(len(df))
    # Compute cosine similarity for each feature vector column
    for column in parameters:
        params = np.vstack(df[column].values)  # Get the feature vectors as dense arrays
        similarity_matrix = cosine_similarity(params)  # Compute matrix of cosine similarity vals 
       
        df['similarities'] += np.sum(similarity_matrix[:, 1:], axis=1)  # Exclude similarity score with itself
    max_sim = df['similarities'].max()
    min_sim = df['similarities'].min()
    df['similarities'] = (df['similarities'] - min_sim) / (max_sim - min_sim)

   
    def get_movie_recommendations(movie_title, num_recommendations, streaming_platforms):
        # Get input index 
        input_ind = df[df['movie_title'] == movie_title].index[0]


        similarity_values = df['similarities'].values
        
        # Get the similarity value of the input movie
        input_similarity_value = similarity_values[input_ind]

        # Calculate the absolute difference between the similarity values and the input similarity value
        similarity_diff = np.abs(similarity_values - input_similarity_value)
        #(df['similarity'] - min_similarity) / (max_similarity - min_similarity)


        # Sort the indices based on the similarity difference in ascending order
        sorted_indices = np.argsort(similarity_diff)



        filtered_indices = np.zeros(num_recommendations)
        count = 0
        done = False
        for ind in sorted_indices:
            if ind != input_ind:
                for i in streaming_platforms:
                    if i in df.iloc[ind]['streaming']and count < num_recommendations and done == False:
                        filtered_indices[count] = ind
                        count = count + 1
                        done = True
                    
                done = False
             

        #Return recommendations
        recommended_df = df.loc[filtered_indices, 'movie_title'].values
        sims = []
        for i in sorted_indices[:num_recommendations]:
            sims.append(similarity_diff[i])



        return recommended_df, sims

    recommended_movies, similarities = get_movie_recommendations(movie_title, num_recs, streaming_platforms)
    print(recommended_movies)
    return recommended_movies, similarities

def get_recommendations_multiple_titles(movies, num_recs, streaming_platforms):
    filtered_movies = []
    for movie in movies:
        if movies.count(movie) % 2 != 0:
            filtered_movies.append(movie)
    movies = filtered_movies

    movie_recs = []
    similarities = []
    for movie in movies:
        movie_rec, sim = get_recommendation_based_on_title(movie, num_recs, streaming_platforms)
        for i in range(len(movie_rec)):
            movie_recs.append(movie_rec[i])
            similarities.append(sim[i])
    
    movie_counts = {}

    for i in range(len(movie_recs)):
        if movie_recs[i] in movie_counts.keys():
            movie_counts[movie_recs[i]] = movie_counts[movie_recs[i]] + similarities[i]
    
        else:
            movie_counts[movie_recs[i]] = similarities[i]
    
    final_recs = []
    for i in range(num_recs):
        min_sim= min(movie_counts, key=movie_counts.get)
        final_recs.append(min_sim)
        del movie_counts[min_sim]


    print(final_recs)
    return(final_recs)

def get_recommendation_genre(genre, num_recs, streaming_platform, crit_weight):
    import pandas as pd

    df = pd.read_csv('MERGE_WITH_STREAMING.csv')
    df['weighted_rating'] = ((df['tomatometer_rating'] + df['IMDB_rating'] / 2) * crit_weight) + (df['twit_mean_rating'] * (1-crit_weight))

    for i in range(len(df)):
        if genre not in df['genres'][i]:
            if len(list(set(streaming_platform) & set(df['streaming'][i]))) == 0:
                df.drop([i])
        
    df.sort_values(by=['weighted_rating'])

    return(df['movie_title'].values[:num_recs])


get_recommendation_based_on_title('The Music Man', 5, ['HBO Max', 'Hulu'])
get_recommendations_multiple_titles(['The Music Man', '17 Again'], 5, ['HBO Max', 'Hulu'])
print(get_recommendation_genre("Romance", 5, ['HBO Max', 'Hulu'], 0.3))
