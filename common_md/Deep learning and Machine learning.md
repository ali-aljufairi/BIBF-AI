# Deep Learning



## The biological inspiration

- Neurons in your cerebral cortex are connected via axons
- A neuron “fires” to the neurons it’s connected to, when enough of its input signals are activated.
- Very simple at the individual neuron level – but layers of neurons connected in this way can yield learning behavior.
- Billions of neurons, each with thousands of connections, yields a mind

![](attachments/Pasted%20image%2020240306231605.png)


## TensorFlow and Keras: A Brief Overview

### TensorFlow
- **TensorFlow** is an open-source machine learning framework developed by Google.
- It provides a flexible and efficient platform for building and training deep neural networks.
- Key features:
    - **Graph-based computation**: TensorFlow represents computations as directed acyclic graphs (DAGs), allowing efficient execution on CPUs, GPUs, or TPUs.
    - **Automatic differentiation**: TensorFlow computes gradients automatically for optimization during training.
    - **High-level APIs**: TensorFlow offers both high-level and low-level APIs for model development.
    - **Community support**: A large community actively contributes to TensorFlow's ecosystem.

### Keras
- **Keras** is a high-level neural networks API written in Python.
- Originally developed as an independent library, it is now part of TensorFlow.
- Key features:
    - **User-friendly**: Keras provides a simple and intuitive interface for designing neural networks.
    - **Modularity**: You can easily stack layers to create complex architectures.
    - **Extensibility**: Keras allows custom layer creation and model customization.
    - **Compatibility**: It seamlessly integrates with TensorFlow and other deep learning libraries.

## Code Snippets

### Creating a Simple Neural Network in Keras
```python
import tensorflow as tf
from tensorflow.keras import layers, models

# Define a sequential model
model = models.Sequential([
    layers.Dense(64, activation='relu', input_shape=(784,)),
    layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Print model summary
model.summary()
```

### Using TensorFlow's Low-Level API
```python
import tensorflow as tf

# Create a simple computational graph
a = tf.constant(2.0)
b = tf.constant(3.0)
c = a * b

# Execute the graph
with tf.Session() as sess:
    result = sess.run(c)
    print(f"Result: {result}")
```


## Types of Neural Networks


### Feedforward Neural Networks (FNNs)

- They consist of multiple layers of interconnected neurons, with no feedback loops.
- Information flows in one direction, from the input layer through the hidden layers to the output layer.



### Convolutional Neural Networks (CNNs)

- They are designed to process data with grid-like topology, such as images.
- They use a special type of neuron called a convolutional neuron, which applies a convolution operation to the input data.


> Convolution is just  a fancy way of saying that we are going to divide the input data into overlapping chunks and perform the same operation on each chunk.



### Recurrent Neural Networks (RNNs)

- Deals with sequence in time or space.
 - **Sequence-to-sequence**: Translate a sentence from one language to another.q
 - **Sequence-to-vector**: Sentiment analysis.
 - **Vector-to-sequence**: Image captioning.



## Types of Activation function

![](attachments/Pasted%20image%2020240306234600.png)

Activation functions are crucial elements in neural networks as they introduce non-linearity into the computations. Without activation functions, the neural network would essentially behave like a single linear function, severely limiting its ability to learn and model complex relationships between inputs and outputs. By applying non-linear activation functions to the weighted sums from each layer, the network gains the capability to capture intricate patterns and representations, enabling it to tackle sophisticated tasks effectively.