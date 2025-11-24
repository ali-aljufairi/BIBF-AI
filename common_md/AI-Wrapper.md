---
date: 2025-11-24
title: "AI Wrappers Aren't the Problem—Exploitative Design Is"
excerpt: "The GenAI gold rush unleashed a flood of wrappers and 'AI solutions' scrambling for budget. C-suite executives, desperate to check the 'using AI' box, have created a market where some vendors prioritize invoicing over engineering."
---

**AI Wrappers Aren't the Problem—Exploitative Design Is**

The GenAI gold rush unleashed a flood of wrappers and "AI solutions" scrambling for budget. C-suite executives, desperate to check the 
"using AI" box, have created a market where some vendors prioritize invoicing over engineering. 

Here's the truth: wrappers aren't inherently bad. When they deliver real value, they're legitimate products. But there's a growing epidemic of vendors charging enterprise prices for systems that are architecturally negligent. I recently evaluated one such product—a RAG system with voice capabilities—and discovered flaws so fundamental they border on billing fraud. I reached out to the company a month ago; they never responded. This post isn't about naming names—it's about arming you with the discernment to spot expensive liabilities masquerading as innovation.

---

**The Value Proposition (And Where It Immediately Breaks Down)**

The product promises easy plug-and-play integration across tech stacks with minimal setup. That value is real. The problem? They pair it with a billing model—flat fee plus per-token usage—that becomes predatory when your system is designed to be abused.

*Here's what responsible billing requires*: Before you charge per token, you **must** implement hard consumption limits per user, per tenant. Without them, you're not selling a service; you're selling a financial attack vector.

---

**Security Failures That Make Billing Unethical**

**1. Authentication That Isn't Authentication**

They use static access keys in every request. Steal one key, access any tenant's data. No rate limiting. No user quotas. I could push 500 million tokens in a single request and bankrupt a customer and you can know there customers from the landing pages of the company

*The fix is trivial* : Use Auth0, Clerk, Cognito, or Keycloak. These aren't new or expensive— they're solved problems. Implement tenant isolation at the infrastructure level, not in request headers. Set per-user token budgets that cut off automatically. When you bill by usage, this isn't optional; it's your fiduciary duty.

**2. A RAG System That Answers Everything**

Their system eagerly responds to JavaScript questions, LeetCode challenges, and general knowledge queries—nothing to do with company documentation. When you charge per token, this isn't a feature; it's negligence. It's not even hard to train your model properly—just peek around Andrej Karpathy's GitHub repos or take Andrew Ng's courses on RAG systems to see how to do this right.

The fix is documented: Implement semantic routing to reject off-topic queries before consuming tokens. Use system prompts to enforce boundaries. Monitor relevance scores and auto-cutoff deviations. See examples: OpenAI's RAG cookbook, Anthropic's enterprise patterns, or Google's grounding documentation—just copy what works.

**3. "Security" That's Just Theater**

They wrap the JSON body in a thin hex-encoding layer (%34%20…).
Open Proxyman, flip the body from “raw” to “hex”, change two bytes, flip back, and the server still accepts the forged request.
No signature, no checksum, no tenant check—just a speed-bump that costs one right-click to bypass.
The fix is basic:

- Sign every payload with HMAC-SHA256 and a per-tenant secret.
- Reject any request whose signature doesn’t verify—before you even parse the JSON.
- Add a nonce + 60-second TTL to kill replay attacks.

Obscurity is not a control when the meter is running in tokens.

---

**Why This Is a Financial Crime, Not Just Bad Code**

When your entire product is a token-billed RAG system, you are financially responsible for:
- **Abuse prevention** – Not a feature; a requirement
- **Tenant isolation** – Not a recommendation; a necessity  
- **Request validation** – Not a nice-to-have; a liability shield
- **Query boundaries** – Not a future roadmap; table stakes

The best practices are published. The tools are mature. There is no excuse for "discovering" these requirements after you've cashed the enterprise check.

---

**What to Demand Before You Sign**

1. **Show me the rate limits**: Ask for tokens-per-user-per-minute caps. If they don't exist, walk away.
2. **Use our auth**: Require integration with your existing identity provider, not their homegrown key system.
3. **Query scope SLAs**: Demand refunds for tokens burned on off-topic responses.
4. **Security audit proof**: Insist on recent pen test results or SOC 2. If they can't produce them, their security doesn't exist.

**For builders**: If you can't implement production-grade auth and rate limiting today, use managed services. It's cheaper than a lawsuit. Your users' trust isn't a variable to optimize—it's the only asset that matters.

The AI wrapper boom will separate vendors who respect their customers from those who exploit their ignorance. Your budget, your data, and your reputation deserve the former.
