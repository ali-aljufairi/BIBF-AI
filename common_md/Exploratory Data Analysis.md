# Exploratory Data Analysis

## Python

### Pandas 
 Pandas is a fast, powerful, flexible and easy to use open source data analysis and data manipulation library built on top of the Python programming language.

  - **Data Frame**: A two-dimensional data structure, i.e., data is aligned in a tabular fashion in rows and columns.
  
  - **Series**: A one-dimensional labeled array capable of holding data of any type (integer, string, float, python objects, etc.). The axis labels are collectively called index.
  
  - **Panel**: A three-dimensional data structure, i.e., data is aligned in a tabular fashion in rows, columns and panels.
    


### Matplotlib

 Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.

  - **Line Plot**: A line plot is a graph that shows frequency of data along a number line.
  
  - **Bar Plot**: A bar plot is a graph that represents the category of data with rectangular bars.
  
  - **Histogram**: A histogram is a graph showing frequency distributions.
  
  - **Scatter Plot**: A scatter plot is a graph that shows the relationship between two sets of data.
  
  - **Pie Chart**: A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.
  
  - **Box Plot**: A box plot is a graph that gives you a good indication of how the values in the data are spread out.
  
  - **Violin Plot**: A violin plot is a method of plotting numeric data and can be considered a combination of the box plot with a kernel density plot.
  
  - **Heat Map**: A heat map is a graphical representation of data where the individual values contained in a matrix are represented as colors.
  
  - **3D Plot**: A 3D plot is a graph that shows the relationship between three sets of data.
  
  - **Contour Plot**: A contour plot is a graphical technique for representing a 3-dimensional surface by plotting constant z slices, called contours, on a 2-dimensional format.
  
  - **Quiver Plot**: A quiver plot is a type of 2D plot that shows vector lines as arrows.
  
  - **Stream Plot**: A stream plot is a type of 2D plot that shows vector field.
  
  - **Polygon Plot**: A polygon plot is a type of 2D plot that shows a filled polygon.
  
  - **Image Plot**: An image plot is a type of 2D plot that shows an image.
  
  - **Polar Plot**: A polar plot is a type of 2D plot that shows data in polar coordinates.
  
  - **3D Surface Plot**: A 3D surface plot is a type of 3D plot that shows a surface.
  
  

## Major Types of Data 

### Numerical  
  - **Discrete**: Discrete data can only take particular values. There may potentially be an infinite number of those values, but each is distinct and there's no grey area in between. 
  - **Continuous**: Continuous data can take any value within a given range.

### Categorical

  - **Quantitative**: Quantitative data is data expressing a certain quantity, amount or range. Usually, there are measurement units associated with the data.

  - **Nominal**: Nominal data is a group of non-parametric variables, that is, variables that do not follow a regular distribution.
  
### Time Series
  
  - **Cross-Sectional**: Cross-sectional data is data collected by observing many subjects (such as individuals, firms, countries, or regions) at the same point of time, or without regard to differences in time.
  - **Time Series**: Time series data is a sequence of data points in chronological order, such as daily closing stock prices or monthly temperatures.
  
  

## Type of data  distribution

![](attachments/Pasted%20image%2020240301214202.png)

## Amazon Athena

Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

## Amazon QuickSight

Amazon QuickSight is a fast, cloud-powered business intelligence service that makes it easy to deliver insights to everyone in your organization. As a fully managed service, QuickSight lets you easily create and publish interactive dashboards that include ML Insights.


## For more Details visit 

[Architecting-on-AWS](Architecting-on-AWS.md)

[Data Lakes](Data%20Lakes.md)



## SPICE 

SPICE (Super-fast, Parallel, In-memory Calculation Engine) is a general purpose, distributed, shared-nothing, parallel processing framework for in-memory analytics. SPICE is designed to be a highly available, fault-tolerant, and self-healing system that provides high throughput and low latency for data processing and analytics.

![](attachments/Pasted%20image%2020240305102328.png)


![](attachments/Pasted%20image%2020240305234634.png)


![](attachments/Pasted%20image%2020240305234647.png)


![](attachments/Pasted%20image%2020240305234656.png)




![](attachments/Pasted%20image%2020240305234705.png)

![](attachments/Pasted%20image%2020240305234713.png)

![](attachments/Pasted%20image%2020240305234720.png)



## The Curse of Dimensionality

![](attachments/Pasted%20image%2020240305234843.png)

## Imputing Missing Data : Mean, Median, Mode Replacement

Replacing missing data with the mean, median, or mode is a common method for handling missing data. This method is also known as univariate imputation. Univariate imputation is the process of replacing missing data with a statistical estimate of the missing value.


## Imputing Missing Data : Random Sample Imputation

Random sample imputation is a technique where we take random observations from the dataset and we use this observation to replace the NaN values. It consists of taking random observation from the dataset and we use this observation to replace the NaN values.


## Imputing Missing Data : Capturing NaN values with a new feature

This technique involves replacing the NaN values with a new feature which captures the NaN values. It is a good method when the data is not missing at random.



## Imputing Missing Data : Machine Learning Algorithm

This technique involves replacing the NaN values with a new feature which captures the NaN values. It is a good method when the data is not missing at random.

KNN: Find K “nearest” (most similar) rows and average their values
Assumes numerical data, not categorical There are ways to handle categorical data (Hamming distance), but categorical data is probably better served by…

Deep Learning
Build a machine learning model to impute data for your machine learning model!
Works well for categorical data. Really well. But it’s complicated.

Regression
Find linear or non-linear relationships between the missing feature and other features
Most advanced technique: MICE (Multiple Imputation by Chained Equations)



## unbalanced data

Unbalanced data typically refers to a problem with classification problems where the classes are not represented equally.


**Random Under-Sampling**: Randomly remove samples from the majority class.

**Random Over-Sampling**: Randomly duplicate samples from the minority class.


**SMOTE (Synthetic Minority Over-sampling Technique)**: Generate synthetic samples from the minority class.


**Cluster-Based Over Sampling**: Generate synthetic samples by generating clusters of the minority class.


## Handling outliers

**Removing outliers**: Remove the outliers from the dataset.

![](attachments/Pasted%20image%2020240306000532.png)




![](attachments/Pasted%20image%2020240306000552.png)






![](attachments/Pasted%20image%2020240306000612.png)



![](attachments/Pasted%20image%2020240306000618.png)




## SageMaker Ground Truth



[Machine Learning Pipeline on AWS](Machine%20Learning%20Pipeline%20on%20AWS.md)





## Next Steps
https://rxhl.notion.site/AWS-Machine-Learning-Specialty-4c51dfb5ae1e476284e215305b7a5d5b



