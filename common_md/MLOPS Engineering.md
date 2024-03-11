# MLOps Engineering


## Objective

### Initial MlOps Engineering

- Explain the benefits of MLOps.
- Compare and contrast DevOps and MLOps.
- Set up experimentation environments for MLOps with Amazon SageMaker.
- Evaluate the security and governance requirements for a machine learning (ML) use case. 
   
### Repeatable MLOps
   
- Explain best practices for MLOps.

- Describe three options for Creating a CI/CD Pipeline for ML.


### Reliable MLOps


- Recommend best practices for monitoring and troubleshooting ML models in production.

- Demonstrate how to use Amazon SageMaker Model Monitor to monitor ML models in production.

- Demonstrate how to automate an ML solution




## Considerations and Challenges Operations ML

> MLOps—a combination of Machine Learning and Operations—combines people, technology, and processes to deliver collaborative ML solutions. 


> This are more important than the technical aspects of MLOps.

![](attachments/Pasted%20image%2020240311140746.png)

### Why does ML workloads not make it to production?

It might be because a lot of the focus when designing and implementing an ML workload is on the function of the model. The focus is on getting the model to work in a development environment. There is often less focus on operating the model and making it accessible and reliable for users after it is trained. 



## ML Lifecycle



![](attachments/Pasted%20image%2020240311145358.png)


For more Explanation Refer back to 

[Machine Learning Pipeline on AWS](Machine%20Learning%20Pipeline%20on%20AWS.md)


### Consideration for MLOps


1. **Consisitency**:  use the same tools and processes for training, deploying, and monitoring models.

1. **Reproducibility**:  ensure that the results of a model can be reproduced.

1. **Scalability**:  scale the model to handle the expected load.

1. **Auditability**:  track the lineage of the model and the data used to train it.


### Why ML governance


![](attachments/Pasted%20image%2020240311154301.png)


### Sage Maker 

![](attachments/Pasted%20image%2020240311161655.png)

> Important to know  BYOC (Bring Your Own Container) and BYOM (Bring Your Own Model) are two important concepts in Amazon SageMaker. BYOC allows you to use your own Docker container to train and deploy models in Amazon SageMaker. BYOM allows you to use your own machine learning model to train and deploy models in Amazon SageMaker.


More Details

[Parctical Data Science](Parctical%20Data%20Science.md)



![](attachments/Pasted%20image%2020240311163037.png)