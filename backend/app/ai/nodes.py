from .llm import llm
from .prompts import *

def summary_node(state):
    text = SUMMARY_PROMPT.format(
        complaint=state["complaint"]
    )

    response = llm.invoke(text)

    state["summary"] = response.content

    return state


def risk_node(state):
    text = RISK_PROMPT.format(
        complaint=state["complaint"]
    )

    response = llm.invoke(text)

    state["risk"] = response.content

    return state


def root_node(state):
    text = ROOT_CAUSE_PROMPT.format(
        complaint=state["complaint"]
    )

    response = llm.invoke(text)

    state["root"] = response.content

    return state


def capa_node(state):
    text = CAPA_PROMPT.format(
        complaint=state["complaint"]
    )

    response = llm.invoke(text)

    state["capa"] = response.content

    return state