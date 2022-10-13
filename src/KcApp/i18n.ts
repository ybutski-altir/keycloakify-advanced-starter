import { useI18n as useI18nBase } from "keycloakify";

type Props = Omit<Parameters<typeof useI18nBase>[0], "extraMessages">;

export function useI18n(props: Props) {
    const { kcContext } = props;
    return useI18nBase({
        kcContext,
        "extraMessages": {
            "en": {
                "alphanumericalCharsOnly": "Only alphanumerical characters",
				"gender": "Gender",
				// Here we overwrite the default english value for the message "doForgotPassword" 
                // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
                "doForgotPassword": "I forgot my password",
                "doLogIn": "Sign In to your account",
            },
            "fr": {
                /* spell-checker: disable */
                "alphanumericalCharsOnly": "Caractère alphanumérique uniquement",
				"gender": "Genre",
				"doForgotPassword": "J'ai oublié mon mot de passe",
                "doLogIn": "Connectez-vous à votre compte"
                /* spell-checker: enable */
            },
        },
    });
}

export type I18n = NonNullable<ReturnType<typeof useI18n>>;