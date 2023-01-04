import { SvelteKitAuth } from "@auth/sveltekit"
import AzureADProvider from "@auth/core/providers/azure-ad"
import { AZURE_AD_CLIENT_ID, AZURE_AD_TENANT_ID, AZURE_AD_CLIENT_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
    providers: [
        AzureADProvider({
            clientId: AZURE_AD_CLIENT_ID,
            clientSecret: AZURE_AD_CLIENT_SECRET,
            tenantId: AZURE_AD_TENANT_ID,
        }),
    ]
})