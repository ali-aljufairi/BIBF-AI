---
title: Parctical Data Science
---


# Practical Data Science 




![](attachments/Pasted%20image%2020240218103420.png)

![](attachments/Pasted%20image%2020240218103632.png)


### Common ML use cases

 - **Classification**: Predicting a category
 - **Regression**: Predicting a number
 - **Clustering**: Finding groups in data
 - **Anomaly detection**: Finding outliers


### ML model benefits

- **identify patterns**: ML models can identify patterns in data that humans can't

- **Minimize human error**: ML models can make predictions without human intervention

- **Can become more accurate over time**: ML models can learn from new data and improve their predictions

- **variety of data**: ML models can handle a variety of data types, including images, text, and numbers


![](attachments/Pasted%20image%2020240218235532.png)


### How to build a Quality dataset Journey


![](attachments/Pasted%20image%2020240218235758.png)

Once you have a dataset, you can start building a machine learning model. The process of building a machine learning model can be broken down into the following steps:

1. Frame the problem: What are you trying to predict? What data do you have available to make predictions?

2. Prepare the data: Clean the data, and split it into training and test sets.

3. Model Development: Train a machine learning model on the training data.

4. Deploy the model: Use the model to make predictions on new data.

5. Monitor the model: Keep track of how well the model is performing, and update it as needed.


### Correlation Matrix

![](attachments/Pasted%20image%2020240219003357.png)

A correlation matrix is a good tool to quantify the linear relationship among the variables as it conveys both the strong and weak linear relationships among numerical variables. It is a k by k matrix, where k is the number of columns in your data including the target. Each cell is populated with the corresponding correlation between the corresponding column variables.


The matrix shown is for a dataset with 9 features, F0 - F9. The matrix displays the correlation between each pair of features. The closer a value is to 1 or -1, the more linear is the relationship. A value close to or equal to 0 shows no linear relationship.


The analyzed dataset may then be filtered and adjusted to improve the quality for training and evaluating a model. Such actions may be dropping some features when they are highly correlated to others or filtering the dataset so that features and target are more balanced.56 


### Data considerations for model training

- **Data size and quality**: The more data you have, the better your model will be. However, more data also means more time and resources to process it. You should also consider the quality of your data. If your data is noisy or has missing values, your model will be less accurate.


-  **Representativeness**: Your data should be representative of the problem you are trying to solve. For example, if you are trying to predict the price of a house, your data should include information about the size, location, and condition of the house.



### Dission Tree

![](attachments/Pasted%20image%2020240219012152.png)


### XGBoost 

- XGBoost is a popular machine learning library that is used for building decision trees. It is known for its speed and accuracy, and is often used in machine learning competitions.


![](attachments/Pasted%20image%2020240219013014.png)


#### XGBoost Hyperparameters

- **alpha**: L1 regularization term on weights. Increasing this value will make model more conservative.


- **eta**: Step size shrinkage used in update to prevents overfitting. After each boosting step, we can directly get the weights of new features, and eta shrinks the feature weights to make the boosting process more conservative.#### XGBoost Hyperparameters

- **min_child_weight**: Minimum sum of instance weight (hessian) needed in a child. If the tree partition step results in a leaf node with the sum of instance weight less than min_child_weight, then the building process will give up further partitioning. In linear regression task, this simply corresponds to minimum number of instances needed to be in each node. The larger, the more conservative the algorithm will be.

- **num_round**: The number of rounds for boosting. This is the number of boosting iterations. The larger, the more accurate the model will be, but also the longer it will take to train.


- **max_depth**: Maximum depth of a tree. Increasing this value will make the model more complex and more likely to overfit.


![](attachments/Pasted%20image%2020240219014149.png)


### Amazon Sage Maker inference options


- **Real-time inference**: Use a model to make predictions on new data in real time. This is useful when you need to make predictions quickly, such as in a web application.


- **Batch inference**: Use a model to make predictions on a large batch of data. This is useful when you need to make predictions on a large dataset, such as a log file or a database.


- **Asynchronous inference**: Use a model to make predictions on new data, and then store the predictions in a database. This is useful when you need to make predictions on new data, but don't need the predictions immediately.


- **Batch  inference**: Use a model to make predictions on a large batch of data. This is useful when you need to make predictions on a large dataset, such as a log file or a database.


![](attachments/Pasted%20image%2020240219014538.png)



### Choosing model deployment options

![](attachments/Pasted%20image%2020240219014638.png)


### ML lifecycle

![](attachments/Pasted%20image%2020240219014726.png)

	
### Methodology of MLOps

![](attachments/Pasted%20image%2020240219014825.png)




### Workflow and associated roles 

![](attachments/Pasted%20image%2020240219014837.png)