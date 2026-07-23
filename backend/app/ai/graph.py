from typing import TypedDict

from langgraph.graph import StateGraph, END

from .nodes import (
    summary_node,
    risk_node,
    root_node,
    capa_node,
)


class ComplaintState(TypedDict):
    complaint: str
    summary: str
    risk: str
    root: str
    capa: str


builder = StateGraph(ComplaintState)

builder.add_node("summary", summary_node)
builder.add_node("risk", risk_node)
builder.add_node("root", root_node)
builder.add_node("capa", capa_node)

builder.set_entry_point("summary")

builder.add_edge("summary", "risk")
builder.add_edge("risk", "root")
builder.add_edge("root", "capa")
builder.add_edge("capa", END)

graph = builder.compile()