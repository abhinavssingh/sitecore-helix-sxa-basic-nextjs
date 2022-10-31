# escape=`

ARG PARENT_IMAGE
ARG SXA_RESOURCES_IMAGE

FROM ${SXA_RESOURCES_IMAGE} AS sxa_image
FROM ${PARENT_IMAGE}

# Copy and init SXA Module
COPY --from=sxa_image C:\module\solr\cores-sxa.json C:\data\cores-sxa.json