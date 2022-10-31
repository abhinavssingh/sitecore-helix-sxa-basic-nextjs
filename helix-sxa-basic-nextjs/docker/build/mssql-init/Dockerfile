# escape=`

ARG PARENT_IMAGE
ARG HEADLESS_SERVICES_IMAGE
ARG SPE_RESOURCES_IMAGE

FROM ${SPE_RESOURCES_IMAGE} AS spe_resources
FROM ${HEADLESS_SERVICES_IMAGE} AS headless_services
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

# Copy and Init Sitecore PowerShell module
COPY --from=spe_resources C:\module\db C:\resources\spe

# Copy and init the JSS / Headless Services Module
COPY --from=headless_services C:\module\db C:\resources\jss