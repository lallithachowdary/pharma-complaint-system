SUMMARY_PROMPT = """
You are a pharmaceutical quality expert.

Summarize the following complaint in 3-4 lines.

Complaint:
{complaint}
"""

RISK_PROMPT = """
Classify this pharmaceutical complaint as only one:

High
Medium
Low

Complaint:
{complaint}
"""

ROOT_CAUSE_PROMPT = """
Suggest the most likely root cause.

Complaint:
{complaint}
"""

CAPA_PROMPT = """
Suggest:

1. Corrective Action

2. Preventive Action

Complaint:
{complaint}
"""