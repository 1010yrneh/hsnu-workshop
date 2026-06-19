FROM mcr.microsoft.com/devcontainers/python:3.14-bookworm

ARG BUN_INSTALL=/home/vscode/.bun
ENV BUN_INSTALL=${BUN_INSTALL}
ENV PATH=${BUN_INSTALL}/bin:${PATH}

USER vscode

RUN curl -fsSL https://bun.sh/install | bash
