# Data Engineering  

## S3 

### S3 Storage Classes

- **S3 Standard**: For general-purpose storage of frequently accessed data; designed for durability of 99.999999999% of objects over a given year.
- **S3 Intelligent-Tiering**: Designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead.
- **S3 Standard-IA**: For long-lived, infrequently accessed data that needs to be accessed rapidly when needed.
- **S3 One Zone-IA**: For long-lived, infrequently accessed, non-critical data.
- **S3 Glacier**: For long-term archive and digital preservation.
- **S3 Glacier Deep Archive**: For long-term archive and digital preservation with retrieval times in hours.


### Lifecycle Policies

- **Transition Actions**: Define when objects transition to another storage class. For example, you might choose to transition objects to the S3 Standard-IA storage class 30 days after you created them, or archive objects to the S3 Glacier storage class one year after creating them.

- **Expiration Actions**: Define when objects expire. For example, you might choose to expire objects in the S3 Standard storage class 365 days after creating them.

- **Noncurrent Version Transition Actions**: Define when noncurrent object versions transition to another storage class. For example, you might choose to transition noncurrent object versions to the S3 Standard-IA storage class 30 days after creating them, or archive noncurrent object versions to the S3 Glacier storage class one year after creating them.

- **Noncurrent Version Expiration Actions**: Define when noncurrent object versions expire. For example, you might choose to expire noncurrent object versions in the S3 Standard storage class 365 days after creating them.

### S3 Encryption

- **S3-Managed Keys (SSE-S3)**: Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.

- **AWS Key Management Service (SSE-KMS)**: With AWS Key Management Service (AWS KMS), you can centrally create, manage, and delete the keys used for server-side encryption. AWS KMS is integrated with several AWS services to make it easy to encrypt the data you store in these services.

- **Customer-Provided Keys (SSE-C)** : You manage the encryption process, the encryption keys, and related tools. You are responsible for protecting the encryption keys you use to protect your data.

### S3 Versioning

- **Versioning**: Versioning is a means of keeping multiple variants of an object in the same bucket. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. With versioning, you can easily recover from both unintended user actions and application failures.



## AWS kinesis Overview

###  kinds of Kinesis

- **Kinesis Data Streams**: Kinesis Data Streams is a massively scalable and durable real-time data streaming service. It can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, financial transactions, social media feeds, IT logs, and location-tracking events.

- **Kinesis Data Firehose**: Kinesis Data Firehose is the easiest way to reliably load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today.

- **Kinesis Data Analytics**: Kinesis Data Analytics is the easiest way to process and analyze streaming data in real time with standard SQL without having to learn new programming languages or processing frameworks. Kinesis Data Analytics enables you to query streaming data or build entire streaming applications using SQL, so that you can gain actionable insights and respond to your business and customer needs promptly.

- **Kinesis Video Streams**: Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), and other processing. Kinesis Video Streams automatically provisions and elastically scales all the infrastructure needed to ingest streaming video data from millions of devices. It also durably stores, encrypts, and indexes video data in your streams, and allows you to access your data through easy-to-use APIs.

![](attachments/Pasted%20image%2020240224111007.png)

