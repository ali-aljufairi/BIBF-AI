# Machine Learning Pipeline on AWS




## Course Objectives

 - Select and justify the appropriate ML approach to a problem
 - Build ,train ,evaluate and deploy and fine-tune  and ML model
 - Apply the steps of the Ml pipeline to solve the problem
 - Describe Best practices for training and deploying ML models pipeline in AWS
 - Identify the stpes to apply the ML to  business problems
 
##  Course Outline

![](attachments/Pasted%20image%2020240211104659.png)

 

## Module 1: Introduction to Machine Learning and Ml Pipeline

Data + Algorithm  + Time = Model

Inferencing: Ask a question to the model

### Business Need 

> Your site needs to be able to predict the likelihood of a customer purchasing a product based on their browsing history.



![](attachments/Pasted%20image%2020240211114402.png)


### Classical programming vs Machine Learning

- Classical programming: 
    - Input + Rules = Output
    - Rules are defined by the programmer
    - Rules are fixed
    

- Machine Learning:
    - Input + Output = Rules
    - Rules are learned from the data
    - Rules are flexible

### Feature and Weight
![](attachments/Pasted%20image%2020240211114531.png)

- Feature: A characteristic of the data
- Weight: A measure of the importance of a feature


### Supervised Learning vs Unsupervised Learning vs Reinforcement Learning

- Supervised Learning:
    - Input + Output = Model
    - The model is trained on labeled data
    - The model is used to make predictions on new data

#### Amazon SageMaker labeling jobs 

 Amazon SageMaker offer labeling jobs to help you label your data. You can use the labeling jobs to create labels for your data. You can use the labels to train your machine learning models. You can use the labels to evaluate your machine learning models. You can use the labels to make predictions with.


![](attachments/Pasted%20image%2020240211125856.png)

#### Types of Supervised Learning
 - **Binary Classification**: Predicting one of two classes
    - For example, predicting whether an email is spam or not spam
 - **Multiclass Classification**: Predicting one of many classes
    - For example, predicting the genre of a movie
- **Regression**: Predicting a continuous value
    - For example, predicting the price of a house



### UnSupervised

- Unsupervised Learning:
    - Input = Model
    - The model is trained on unlabeled data
    - The model is used to find patterns in the data

![](attachments/Pasted%20image%2020240211130153.png)


### Reinforcement Learning

- Reinforcement Learning:
    - Input + Output = Model
    - The model is trained on feedback from the environment
    - The model is used to make decisions in the environment

![](attachments/Pasted%20image%2020240211130517.png)


### Deep Learning

- Deep Learning:
    - A type of machine learning
    - Uses neural networks
    - Can learn from unstructured data
    ![](attachments/Pasted%20image%2020240211130722.png)

    > The figure demonstate going from  AI to ML to Deep Learning


![](attachments/Pasted%20image%2020240211131755.png)

#### Deep Learning recap


- Deep learning models 
    - Learn using Artificial Neural Networks (ANN) 
    - Can be trained on raw features 
- Include: 
    -    A subset of ML methods 
    -   Neurons arranged for computational efficiency 
    - Training networks with hundreds of layers that learn and improve the features

![](attachments/Pasted%20image%2020240211132602.png)


### Machine Learning use cases

- **Recommendation Systems**: Predicting what a user will like
- **Fraud Detection**: Predicting whether a transaction is fraudulent
- **Voice Recognition**: Predicting what a user is saying.
- **Image Recognition**: Predicting what is in an image


### The Pipeline of ML Problem for buy kindle 

#### Bussines problem and Problem Formulation
![](attachments/Pasted%20image%2020240211133202.png)

#### Data collection and integration
![](attachments/Pasted%20image%2020240211133220.png)

#### Data preprocessing and visulization
![](attachments/Pasted%20image%2020240211133245.png)


#### Data prepprocessing and visualization
![](attachments/Pasted%20image%2020240211133434.png)


#### Model Training 

![](attachments/Pasted%20image%2020240211133549.png)


#### Model tuning and feature enginnering

![](attachments/Pasted%20image%2020240211133638.png)


#### Model deployment

![](attachments/Pasted%20image%2020240211133720.png)


## Module 2: AWS SageMaker

Amazon SageMaker is a fully-managed service used to build, train and deploy ML models at any scale. You can use part or all of Amazon SageMaker features.



###  Instances Types
![](attachments/Pasted%20image%2020240211143654.png)

#### Algorithm options

![](attachments/Pasted%20image%2020240211143757.png)


#### SageMaker Deploytme

![](attachments/Pasted%20image%2020240211144426.png)




## Module 3 : Problem Formulation

### Problem Formulation

![](attachments/Pasted%20image%2020240212095115.png)

![](attachments/Pasted%20image%2020240212100001.png)

#### Define Success 

- ** Model Performance metrics**: 
    - **Example**:  The model should have an accuracy of 90% in predicting whether a customer will buy a Kindle
        - Accuracy
        - Precision
        - Recall
        - F1 score
        - AUC

- **Business Metrics**:
    - **Example**: The model should increase the number of Kindles sold by 10%
        - Revenue
        - Customer satisfaction
        - Customer retention
        - Customer acquisition
        
## Module 4: Data Preoprocessing 
        
![](attachments/Pasted%20image%2020240212101253.png)

![](attachments/Pasted%20image%2020240212101357.png)

### Python libraries for data preprocessing

- **Pandas**: Data manipulation and analysis which provides data structures and functions to manipulate numerical tables and time series data.
 ```python
import pandas as pd
```


- **Numpy**: A library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.
```python
import numpy as np
```

- **Matplotlib**: A plotting library for the Python programming language and its numerical mathematics extension NumPy.
```python
import matplotlib.pyplot as plt
```

- **Seaborn**: A Python data visualization library based on matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.
```python
import seaborn as sns
```

### Statistics for data preprocessing

- **Mean**: The average of the numbers
- **Median**: The middle number
- **Mode**: The number that appears most often
- **Standard Deviation**: A measure of the amount of variation or dispersion of a set of values
- **Variance**: A measure of the amount of variation or dispersion of a set of values
- **Correlation**: A measure of the strength and direction of the relationship between two variables
- **Covariance**: A measure of the relationship between two random variables

###  Dealing with outliers

- **Outliers**: An observation that lies an abnormal distance from other values in a random sample from a population
- **Aritificial Outliers**: Outliers that are created by errors in data collection or entry
- **Natural Outliers**: Outliers that are part of the population
    - ** Tranformation**: Logarithmic, square root, cube root, reciprocal, square, cube, exponential, and power transformations
    - ** impute a value**: Replace the outlier with a value that is within the range of the data


- **Methods to detect outliers**:
    - **Boxplot**
    - **Z-score**
    - **IQR score**
    - **Scatter plot**
    - **Histogram**
    - **DBSCAN**
    - **Isolation Forest**
    - **Local Outlier Factor**
    - **Elliptic Envelope**
    - **One-Class SVM**

![](attachments/Pasted%20image%2020240212104430.png)

![](attachments/Pasted%20image%2020240212104453.png)


![](attachments/Pasted%20image%2020240212104529.png)


![](attachments/Pasted%20image%2020240212104911.png)


![](attachments/Pasted%20image%2020240212104934.png)