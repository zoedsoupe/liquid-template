FROM docker.redpanda.com/vectorized/redpanda:v23.1.2

EXPOSE 29092

COPY redpanda.conf /etc/redpanda/redpanda.conf

CMD ["redpanda", "start", "--smp 0", "--memory 1G", "--reserve-memory", "--overprovisioned", "--node-id 0", "--kafka-addr FLY://[::]:29092", "--advertise-kafka-addr FLY://redpanda-scti.internal:29092"]

