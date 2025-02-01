
# zero shot


![](attachments/Pasted%20image%2020250129175104.png)


# Few shots

![](attachments/Pasted%20image%2020250129175157.png)



# Chaining 

![](attachments/Pasted%20image%2020250129175254.png)


# Tree of Thought
![](attachments/Pasted%20image%2020250129175745.png)


# ReAct to the prompt

what you do 

system_prompt = '''
You are an AI assistant who can perform the following steps:
1. Reason through the problem by describing your thoughts in a "Thought:" section.
2. When you need to use a tool, output an "Action:" section with the tool name and its input.
3. After the tool call, you'll see an "Observation:" section with the tool's output.
4. Continue this cycle of Thought → Action → Observation as needed.
5. End with a concise "Final Answer:" that answers the user's query.

Note:
- The chain of thought in "Thought:" sections is only visible to you and not part of your final answer.
- The user should only see your "Final Answer:".
'''

You will be given this prompt and you have to generate the output as per the prompt. and you will parse the output and give the final answer.