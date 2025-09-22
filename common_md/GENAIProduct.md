---
date: 2025-07-10
category: "Techn Insights"
---

# Building Sorami: A GenAI-Powered Language Learning Portal - Architecture Decisions and Lessons Learned

In the rapidly evolving landscape of generative AI applications, building a production-ready product requires making tough architectural decisions, choosing the right technology stack, and learning from both successes and failures. This post dives deep into the development journey of Sorami, a language learning portal powered by generative AI, exploring the decision-making process, technical choices, challenges overcome, and key insights gained during its development.

## The Genesis: Bootcamp-Driven Development

Sorami's development began during an intensive generative AI bootcamp led by Andrew Brown. This free-to-join program provided an accelerated learning environment that compressed months of typical development cycles into weeks. The bootcamp's structure was uniquely designed to prevent over-engineering while encouraging rapid prototyping and iteration.

**Key Bootcamp Principles That Shaped Sorami:**
- **Time-Boxed Development**: Strict deadlines prevented analysis paralysis
- **Fail-Fast Philosophy**: Quick prototyping revealed flawed assumptions early
- **Iterative Refinement**: Each iteration built upon lessons from the previous
- **Real-World Constraints**: Development occurred during actual work hours, simulating production pressure

The bootcamp environment taught a crucial lesson: sometimes you're solving the wrong problem entirely. This realization led to multiple architectural pivots that ultimately resulted in a more focused, user-centric product.

## What is Sorami?

Sorami is an intelligent language learning portal that leverages generative AI to create personalized, adaptive learning experiences. Unlike traditional language learning platforms that follow rigid curricula, Sorami dynamically generates content based on individual learner patterns, preferences, and progress.

**Core Features:**
- **Adaptive Content Generation**: AI-powered lesson creation tailored to learning style
- **Conversational Practice**: Natural language interactions for real-world conversation practice
- **Progress Analytics**: Detailed insights into learning patterns and areas for improvement
- **Cultural Context Integration**: Authentic cultural scenarios and real-world applications
- **Multi-Modal Learning**: Text, audio, and visual content generation

## The "Weird" Tech Stack: Why These Choices?

When observers first encounter Sorami's technology stack, they often describe it as "unconventional" or "weird." This perception stems from the deliberate choice to prioritize developer experience, rapid iteration, and scalability over following industry trends.

### Frontend: Next.js with TypeScript

**Why Next.js?**
- **Full-Stack Capabilities**: Server-side rendering, API routes, and static generation in one framework
- **Developer Experience**: Hot reloading, excellent TypeScript support, and intuitive file-based routing
- **Performance**: Automatic code splitting and optimization out of the box
- **Ecosystem Maturity**: Rich plugin ecosystem and community support

**TypeScript Integration:**
While TypeScript adds development overhead, the long-term benefits of type safety and better IDE support far outweigh the initial learning curve. In a fast-paced bootcamp environment, catching errors at compile-time rather than runtime was invaluable.

### Backend: Python with FastAPI

**Python's Role in a "JavaScript World":**
- **AI/ML Integration**: Seamless integration with popular ML libraries (Transformers, LangChain, etc.)
- **Rapid Prototyping**: Python's concise syntax enables quick API development
- **Async Capabilities**: FastAPI provides excellent async support for handling concurrent requests
- **Data Processing**: Superior libraries for text processing and NLP tasks

**FastAPI Advantages:**
- **Automatic Documentation**: OpenAPI/Swagger generation out of the box
- **Type Hints**: Python type hints provide runtime validation
- **Performance**: On par with Node.js for most use cases
- **Learning Curve**: Familiar syntax for developers coming from data science backgrounds

### Database: PostgreSQL with Prisma ORM

**PostgreSQL Choice:**
- **JSON Support**: Native JSONB for flexible AI-generated content storage
- **Full-Text Search**: Advanced text search capabilities for language content
- **ACID Compliance**: Data integrity for user progress and learning analytics
- **Scalability**: Proven performance at scale

**Prisma ORM:**
- **Type Safety**: Generated types ensure database queries are type-safe
- **Migration System**: Version-controlled database schema changes
- **Multi-Database Support**: Easy switching between development and production databases

### AI/ML Stack: OpenAI + Custom Models

**OpenAI Integration:**
- **API Simplicity**: RESTful API access to powerful language models
- **Cost-Effective**: Pay-per-use model suitable for startup-scale applications
- **Rapid Iteration**: Easy model swapping and A/B testing
- **Reliability**: Enterprise-grade API availability and support

**Custom Model Considerations:**
While we started with OpenAI, the architecture allows for easy integration of custom-trained models as the product scales.

### Infrastructure: Vercel + AWS

**Vercel for Frontend:**
- **Zero-Config Deployment**: Automatic scaling and CDN distribution
- **Preview Deployments**: Per-branch deployments for easy testing
- **Edge Functions**: Global distribution for low-latency API responses

**AWS for Backend:**
- **Managed Services**: RDS for database, Lambda for serverless functions
- **Scalability**: Auto-scaling capabilities for unpredictable traffic
- **Cost Optimization**: Pay-for-what-you-use pricing model

## Architectural Challenges and Solutions

### Challenge 1: AI Content Generation at Scale

**Problem:** Generating personalized content for thousands of users while maintaining quality and relevance.

**Solution:**
- **Caching Strategy**: Implemented Redis for frequently requested content patterns
- **Batch Processing**: Pre-generate common content during off-peak hours
- **User Profiling**: ML models to predict content preferences and reduce generation load

### Challenge 2: Real-Time Conversational AI

**Problem:** Maintaining context in long conversations while ensuring responsive interactions.

**Solution:**
- **Session Management**: Sophisticated session handling with conversation memory
- **Streaming Responses**: WebSocket implementation for real-time AI responses
- **Context Window Optimization**: Intelligent context pruning to stay within token limits

### Challenge 3: Data Privacy and Security

**Problem:** Handling sensitive user data and learning progress information.

**Solution:**
- **End-to-End Encryption**: All user data encrypted in transit and at rest
- **GDPR Compliance**: Data minimization and user consent management
- **Anonymization**: AI training data anonymized to protect user privacy

## What Worked Well: The Success Stories

### 1. Rapid Prototyping Capability

The chosen stack enabled us to go from idea to working prototype in under 48 hours. This rapid iteration cycle was crucial during the bootcamp's time-constrained environment.

### 2. Developer Productivity

TypeScript + Next.js + FastAPI created a development experience where adding new features felt almost effortless. The type safety prevented numerous runtime errors.

### 3. Scalability by Design

From day one, the architecture was built with scale in mind. When user growth exceeded expectations, the system handled the load without major rewrites.

### 4. AI Integration Flexibility

The modular AI layer allowed us to experiment with different models and providers without touching the core application logic.

## What Didn't Work: The Hard Lessons

### 1. Over-Reliance on External APIs

**Issue:** Heavy dependence on OpenAI's API created single points of failure.

**Impact:** Service outages affected user experience directly.

**Lesson:** Implement fallback mechanisms and consider hybrid approaches with custom models.

### 2. Database Schema Evolution

**Issue:** Early schema decisions didn't account for the complexity of AI-generated content.

**Impact:** Multiple migration challenges and data consistency issues.

**Lesson:** Design for flexibility from the start, especially when dealing with unstructured AI content.

### 3. Real-Time Performance

**Issue:** Initial real-time conversation implementation caused performance bottlenecks.

**Impact:** Users experienced latency during peak usage.

**Lesson:** Optimize for the 99th percentile, not just average performance.

## Future Improvements and Roadmap

### Short-Term (Next 3 Months)
- **Hybrid AI Architecture**: Combine OpenAI with custom fine-tuned models
- **Advanced Caching**: Implement intelligent content caching with personalization
- **Performance Monitoring**: Comprehensive APM and user experience tracking

### Medium-Term (6-12 Months)
- **Mobile Applications**: Native iOS and Android apps
- **Offline Capabilities**: Downloadable content for offline learning
- **Multi-Language Support**: Expand beyond initial language pairs

### Long-Term Vision
- **Custom AI Models**: Train domain-specific language models
- **Global Expansion**: Support for additional languages and cultural contexts
- **Enterprise Features**: Team learning, progress analytics, and integration APIs

## Key Takeaways for GenAI Product Development

### 1. Embrace Constraints as Catalysts

The bootcamp's time constraints forced us to make decisions quickly, often leading to better solutions than over-analysis would have produced.

### 2. Prioritize Developer Experience

A "weird" stack that developers love will outperform a conventional stack that developers hate. Productivity compounds over time.

### 3. Design for Evolution

AI technology moves fast. Architectures that can adapt to new models, APIs, and capabilities will have longer lifespans.

### 4. User-Centric AI Implementation

The most sophisticated AI is worthless if it doesn't serve user needs. Always validate AI features against actual user value.

### 5. Security and Privacy First

With AI handling sensitive learning data, privacy cannot be an afterthought. Build security into the architecture from day one.

## Conclusion: The Journey Continues

Building Sorami taught us that successful GenAI products require balancing innovation with practicality, rapid iteration with architectural soundness, and technical excellence with user-centric design. The "weird" stack proved to be a strength, enabling us to ship faster and iterate more effectively than more conventional approaches.

As the field of generative AI continues to evolve, Sorami's architecture provides a solid foundation for future innovations. The lessons learned—about technology choices, architectural decisions, and development processes—will inform not just Sorami's future, but also our approach to building AI-powered applications in general.

The journey of building Sorami demonstrates that with the right mindset, constraints can become superpowers, and unconventional choices can lead to extraordinary results. As we continue to improve and scale the platform, these foundational decisions will continue to pay dividends in user experience, developer productivity, and business success.

---

*Building Sorami: A deep dive into architectural decisions, technology choices, and lessons learned in developing a GenAI-powered language learning platform.*
