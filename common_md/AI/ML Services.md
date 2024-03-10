# AWS Machine Learning Services


## Amazon Comprehend

- Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in a text.

- Amazon Comprehend can identify the language of the text; extract key phrases, places, people, brands, or events; understand how positive or negative the text is; and automatically organize a collection of text files by topic.

- Amazon Comprehend can also identify spam or other unwanted content in a large set of documents.

- Amazon Comprehend can be used to analyze a wide range of text, including social media posts, websites, and documents.

| Feature   | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| Entity    | identify entities such as people, places, brands, or events in a text.      |
| Languages | identify the language of the text.                                          |
| Sentiment | determine the sentiment (positive, negative, neutral) of the text.          |
| Syntax    | analyze the syntax of the text, including parts of speech and syntax trees. |



## Amazon Translate


- Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation.

- Amazon Translate can translate text between languages, and it can also be used to localize websites and applications.


## Amazon Rekognition



- Amazon Rekognition is a deep learning-based image and video analysis service that can identify objects, people, text, scenes, and activities in images and videos, as well as detect any inappropriate content.


- Amazon Rekognition can be used to analyze images and videos in a wide range of use cases, including media, advertising, and public safety.



## Amazon Forecast



- Amazon Forecast is a fully managed service that uses machine learning to deliver highly accurate forecasts.


- Amazon Forecast can be used to forecast demand, sales, and other time-series data, and it can also be used to forecast other types of data, such as weather and financial data.

### Amazon forecast Algorithms

  

#### CNN-QR (Convolutional Neural Network – Quantile Regression)

- Best for: Large datasets with hundreds of time series
- Features: Accepts related historical time series data & metadata

#### DeepAR+

- Model Type: Recurrent Neural Network
- Best for: Large datasets
- Features: Accepts related forward-looking time series & metadata

#### gProphet

- Model Type: Additive model with non-linear trends and seasonality
- Features: Suitable for various time series forecasting scenarios

#### NPTS (Non-Parametric Time Series)

- Best for: Sparse data
- Variants: Available for seasonal/climatological forecasts

#### ARIMA (Autoregressive Integrated Moving Average)

- Commonly used for: Simple datasets (<100 time series)

#### ETS (Exponential Smoothing)

- Commonly used for: Simple datasets (<100 time series)



### AWS LEX


- Amazon Lex is a service for building conversational interfaces into any application using voice and text.

> its what I used to build my senior project 






