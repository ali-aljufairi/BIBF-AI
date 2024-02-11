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