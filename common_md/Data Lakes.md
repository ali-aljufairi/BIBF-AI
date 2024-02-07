# Data Lake

## Introduction to data lakes

### Why Data Lakes?

1.  Are a great way to store and analyze large volumes of data at a low cost.
1.  Exponential growth of data.
1.  unstructured data.
    -  Text
    - Images 
    - Videos
    - Audio
1. Need analytics faster 
    - Days 
    - Hours
    - Real time


### Benefits of Data Lakes


![](attachments/Pasted%20image%2020240207093527.png)


### Data warehouse vs Data Lake

![](attachments/Pasted%20image%2020240207094222.png)

### Data Lake

![](attachments/Pasted%20image%2020240207095533.png)

### Analytics Functionality vs Aws

![](attachments/Pasted%20image%2020240207100450.png)


![](attachments/Pasted%20image%2020240207100521.png)


### This Course will cover

![](attachments/Pasted%20image%2020240207101104.png)


### AWS Glue

AWS Glue is a fully managed extract, transform, and load (ETL) service provided by Amazon Web Services (AWS). It is designed to simplify the process of preparing and loading data for analysis. AWS Glue automates the discovery, cataloging, and transformation of data from various sources, making it easier to move and combine datasets for analytics.

#### Key Features:

- **Data Catalog:**
  - AWS Glue includes a centralized metadata repository called the Data Catalog, where information about available data sources, transformations, and targets is stored.
  - The Data Catalog provides a unified view of metadata, making it easier to discover and understand the structure of your data.

- **ETL Automation:**
  - With AWS Glue, you can create ETL jobs using a visual interface or by writing custom code in Python or Scala.
  - The service automatically generates ETL code, reducing the need for manual coding and accelerating the ETL process.

- **Serverless Architecture:**
  - AWS Glue is a serverless service, meaning you don't need to provision or manage infrastructure. It scales dynamically based on the processing needs of your jobs.

- **Integration with Other AWS Services:**
  - AWS Glue seamlessly integrates with other AWS services, such as Amazon S3, Amazon Redshift, and Amazon RDS, allowing you to build end-to-end data workflows.

#### Data Catalog

The Data Catalog is a crucial component of AWS Glue, serving as a metadata repository that stores information about your data assets. It acts as a comprehensive catalog that facilitates the management, organization, and discovery of data. Here are some key aspects of the AWS Glue Data Catalog:

- **Metadata Storage:**
  - The Data Catalog stores metadata about tables, schemas, partitions, and transformations. This metadata provides a detailed understanding of the structure and characteristics of your data.

- **Unified View:**
  - By centralizing metadata in the Data Catalog, AWS Glue provides a unified view of your data assets. This makes it easier for data engineers, analysts, and scientists to discover and work with data across various sources.

- **Search and Discovery:**
  - Users can search for and discover relevant datasets using the Data Catalog. The metadata includes information about data sources, formats, and transformations, aiding in the exploration of available data.

- **Access Control:**
  - AWS Glue allows you to define access controls for the Data Catalog, ensuring that only authorized users can view or modify metadata. This helps in maintaining data security and compliance.

- **Integration with External Tools:**
  - The Data Catalog can be seamlessly integrated with external tools and services, enhancing the overall data governance and collaboration within your organization.


## Data ingestion and cataloging


### Storage of datasets
![](attachments/Pasted%20image%2020240207105153.png)

### Difference between CSV and Parquet

#### 1. Storage Format:

- **CSV:** Stores data in plain text format with values separated by commas or other delimiters. It is a human-readable format but may not be as space-efficient as binary formats.
  
- **Parquet:** Utilizes a columnar storage format, storing data in a highly compressed binary format. It organizes data into columns rather than rows, allowing for better compression and efficient storage.

#### 2. Compression:

- **CSV:** Generally has limited built-in compression. The compression is achieved mainly through general-purpose algorithms applied to the entire file.

- **Parquet:** Uses advanced compression techniques, including dictionary encoding and run-length encoding, which can significantly reduce storage space. It allows for more efficient compression by compressing data within each column separately.

#### 3. Schema Evolution:

- **CSV:** Schema evolution (changing the structure of data over time) can be challenging, especially when dealing with large datasets, as the schema is not explicitly defined within the file.

- **Parquet:** Supports schema evolution, making it easier to add, remove, or modify columns without the need for data conversion. This is particularly useful in evolving data architectures.

#### 4. Performance:

- **CSV:** Reading and writing CSV files can be slower, especially when dealing with large datasets, as the entire file must be processed sequentially.

- **Parquet:** Due to its columnar storage and compression, Parquet is designed for high performance, especially for analytical queries that involve reading only specific columns. This makes it suitable for big data processing frameworks like Apache Spark and Apache Hive.

#### 5. Data Types:

- **CSV:** Generally supports basic data types (text, numbers), and the interpretation of data types may depend on how the data is imported or read.

- **Parquet:** Supports a wide range of complex data types, including nested structures and custom types. This allows for more flexibility in representing diverse datasets.

#### 6. Use Cases:

- **CSV:** Suitable for simple, tabular data storage and exchange, especially when human readability is a priority.

- **Parquet:** Ideal for big data processing, analytics, and data warehousing, where storage efficiency, fast query performance, and schema evolution are crucial.
