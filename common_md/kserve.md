# AI Model Serving Platforms

## KServe
- Kubernetes-based, open-source serving platform.
- Extends Kubernetes with Custom Resource Definitions (CRDs) for deploying and managing serverless, event-driven applications.
- Designed for seamless integration with other Kubernetes services and tools.

## vLLM
- High-performance library tailored for LLM inference and serving.
- Emphasizes efficient memory management and high throughput.
- Features the PagedAttention mechanism for optimized memory allocation, allowing higher batch sizes and cost-effective serving.
- Supports continuous batching, GPU parallelism, streaming output, and OpenAI API compatibility.

## Ray Serve
- Scalable, high-performance serving library for Python applications.
- Built on the Ray distributed computing framework, offering fault tolerance and resource management.
- Ideal for real-time, low-latency serving applications requiring high throughput and scalability.

## Text Generation Inference (TGI)
- Toolkit for deploying and serving LLMs, developed by Hugging Face.
- Enables high-performance text generation for popular open-source LLMs.
- Features include tensor parallelism, token streaming, continuous batching, and support for quantization.
- Supports multiple backends, including vLLM and TensorRT-LLM, providing flexibility in deployment. ([Hugging Face](https://huggingface.co/blog/tgi-multi-backend?utm_source=chatgpt.com))

## TensorRT-LLM
- Open-source library designed to accelerate and optimize inference performance on NVIDIA GPUs.
- Integrates TensorRT’s Deep Learning Compiler and optimized kernels for efficient inference at scale.
- Supports popular LLMs like Llama 2, GPT-2, GPT-3, Falcon, and Mosaic MPT.
- Offers features like in-flight batching and paged key-value caching for enhanced efficiency.

Each of these platforms offers unique features and optimizations tailored to different deployment needs. The choice among them depends on specific project requirements, including performance metrics, hardware compatibility, and integration considerations.
