FROM lukechannings/deno

EXPOSE 3003

WORKDIR /app

COPY main.ts .

ENTRYPOINT ["sleep", "infinity"]