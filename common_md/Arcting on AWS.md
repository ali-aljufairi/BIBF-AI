# Day 1: AWS Security and Identity Management

## Create Role

### Trust Policy: 
The trust policy defines who or what can assume the role. It outlines the entities that are allowed to take on the permissions associated with the role. This can include AWS services, users, accounts, or even external identities.

### Permissions Policy: 
The permissions policy specifies what actions and resources the role is allowed to access or manipulate. It defines the boundaries of the role's capabilities within AWS. Permissions policies can be crafted to be very granular, allowing for fine-tuned control over the role's actions.

## Policy Types

### 1. Grant Permissions:
This policy type involves explicitly granting specific permissions to roles, users, or groups. It provides a detailed and controlled approach to defining who can do what within an AWS environment.

### 2. AWS Boundaries:
AWS boundaries refer to limitations set on resources or actions within the AWS infrastructure. These boundaries are often defined by AWS itself to ensure the security and stability of the overall system.

## Organizations

### 1. Internet Root User and SCP (Service Control Policies) Only Organization:
This type of organization restricts the root user to only have access to Service Control Policies, providing a highly secure and controlled environment.

### 2. OU (Organizational Unit) Groups of Accounts:
Organizational Units allow for the grouping of AWS accounts based on specific criteria. Within an OU, accounts can be further categorized. For example:
- Root
  - Sandbox
  - Security
  - Test

Organizational Units help in structuring and organizing AWS accounts effectively.

### How Organizations Work:
AWS Organizations enable the management of multiple AWS accounts. It allows for central management of policies, consolidated billing, and simplified resource sharing between accounts.

## Types of Identity-Based Policies

### 1. AWS Managed Policies:
   - Service Access: These policies grant permissions for specific AWS services based on predefined access levels.
   - Job Function: Designed for roles or responsibilities within an organization, these policies define access based on job-specific requirements.

### 2. Custom Policies:
User-created policies that cater to specific needs or requirements, providing a flexible way to define detailed permissions.

### 3. Resource-Based Policies:
These policies dictate access to AWS resources based on the resource's attributes. They specify who can perform actions on the resource and under what conditions.




### VPC (Virtual Private Cloud)


# AWS Networking Basics: NACL vs. Security Groups

## Network Access Control Lists (NACLs)

Network Access Control Lists (NACLs) are like security guards for your entire subnet. They operate at the subnet level and act as filters for incoming and outgoing traffic. Here are some key points about NACLs:

- **Stateless Filtering**: NACLs are stateless, meaning they don't keep track of the state of the connection. Each rule in a NACL is independent and is applied to each packet individually. You need to define rules for both inbound and outbound traffic separately.

- **Rule Evaluation Order**: Rules in NACLs are evaluated based on rule numbers in ascending order. The first rule that matches the traffic is applied, and subsequent rules are ignored.

- **Numbered Rules**: Each rule in a NACL is assigned a rule number. Lower rule numbers are evaluated first.

- **Allow/Deny Rules**: NACLs have both allow and deny rules. If there's no rule explicitly allowing the traffic, it's denied by default.

- **Default Behavior**: The default behavior of a NACL is to deny all inbound and outbound traffic. You must explicitly define rules to allow the desired traffic.

- **Applied to Subnets**: NACLs are associated with subnets. Each subnet in your VPC must be associated with a NACL, and each NACL can be associated with multiple subnets.

## Security Groups

Security Groups are like personal firewalls for your instances. They operate at the instance level and control inbound and outbound traffic based on security group rules. Here are some key points about Security Groups:

- **Stateful Filtering**: Security Groups are stateful, meaning they keep track of the state of the connection. If you allow inbound traffic, the corresponding outbound traffic is automatically allowed, and vice versa. This simplifies rule management and makes it easier to allow responses to legitimate traffic.

- **Allow-Only Rules**: Security Groups follow a default "deny all" inbound traffic rule and an "allow all" outbound traffic rule. You only need to define rules for the specific traffic you want to allow.

- **Instance Level Protection**: Each instance in your VPC must be associated with one or more security groups, and each security group can be associated with multiple instances.

- **Evaluates All Rules**: Unlike NACLs, all rules in a Security Group are evaluated for each traffic flow, and the most specific rule is applied.

#### Conclusion

In summary, the key difference between stateless and stateful filtering is in how they handle the state of connections. NACLs use stateless filtering, where each packet is evaluated independently, while Security Groups use stateful filtering, keeping track of the state of connections to simplify rule management and allow legitimate responses.


#### Route Table:
- Default Private: By default, route tables in a VPC are private and can't be accessed by external entities or resources outside the VPC. This ensures network isolation and security.






# Architecting on AWS Student Guide


## Module 1: Introduction

This module provides an overview of AWS architecture best practices. Key topics covered include:

- Well-Architected Framework - The best practices for designing reliable, secure, and efficient systems on AWS based on five pillars: operational excellence, security, reliability, performance efficiency, and cost optimization.

- Shared Responsibility Model - AWS is responsible for security of the cloud and you are responsible for security in the cloud. Understand where responsibilities lie for security configurations.  

- Deployment Options - Choices for deploying workloads on AWS include lift and shift, replatforming, refactoring, and cloud-native rearchitecting. Consider which option aligns with your goals.

- Multi-Account Strategy - Separate accounts for development/testing, staging, and production environments provide improved security and control. Consider an organizational structure.

- Edge Locations - AWS provides edge locations that cache content closer to end users for lower latency access. Route traffic through edge locations where appropriate.

## Module 2: Security 

This module dives deeper into security best practices on AWS. Key areas covered include: 

- Identity and Access Management (IAM) - Centrally manage access to AWS resources using IAM users, groups, roles, and policies. IAM is the core of AWS security.

- Encryption - Protect data at rest using services like EBS encryption, and in transit using SSL/TLS. Store secrets securely with secrets manager. 

- Network Security - Restrict networking access using security groups, network access control lists (NACLs), and VPC flow logs. Separate public-facing from private resources.

- Logging and Monitoring - Configure AWS CloudTrail, CloudWatch, and VPC flow logs to monitor API calls and traffic flow for visibility into potential issues. 

- Incident Response - Have procedures documented for responding to security events. Test using scenarios like account compromises.

## Module 3: Networking

This module covers networking fundamentals important for architecting on AWS. Key topics include:

- Virtual Private Cloud (VPC) - The fundamental networking primitive that allows you to define your own virtual network topology on AWS including IP address ranges, subnets, route tables, and network gateways. 

- Subnets - Subnets further divide the IP range of your VPC and allow you to place resources in public or private environments. 

- Security Groups - Stateful firewalls that act at the instance-level to restrict ingress and egress traffic. 

- Network Access Control Lists (NACLs) - Optional stateless firewalls that act at the subnet-level. 

- Route Tables - Direct traffic between VPCs, on-premises networks, and the internet using routes and gateways. 

- VPC Peering/Endpoints - Connect VPCs in the same or different AWS accounts together without going over the internet. Endpoints connect to services without an internet gateway.



