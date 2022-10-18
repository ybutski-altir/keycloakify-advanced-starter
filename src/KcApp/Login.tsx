// This is a copy paste from https://github.com/InseeFrLab/keycloakify/blob/main/src/lib/components/Login.tsx
// It is now up to us to implement a special behavior to leverage the non standard authorizedMailDomains
// Default Template could be use from - import Template from "keycloakify/lib/components/Template";

import React, { useState, memo } from "react";
import Template from "./Template";
import type { KcProps, KcContextBase } from "keycloakify";
import { useCssAndCx } from "keycloakify/lib/tools/useCssAndCx";
import { useConstCallback } from "powerhooks/useConstCallback";
import type { FormEventHandler } from "react";
import type { I18n } from "./i18n";

import { Button } from "../components/button/Button";
import { PasswordField } from "../components/passwordField/PasswordField";
import { TextField } from "../components/textField/TextField";
import { useStyles } from './Login.styles';

const Login = memo(
    ({
        kcContext,
        i18n,
        doFetchDefaultThemeResources = true,
        ...props
    }: { kcContext: KcContextBase.Login; i18n: I18n; doFetchDefaultThemeResources?: boolean } & KcProps) => {
        const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext;

        const { msg, msgStr } = i18n;

        const { cx } = useCssAndCx();
        const classes = useStyles();

        const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

        const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(e => {
            e.preventDefault();

            setIsLoginButtonDisabled(true);

            const formElement = e.target as HTMLFormElement;

            //NOTE: Even if we login with email Keycloak expect username and password in
            //the POST request.
            formElement.querySelector("input[name='email']")?.setAttribute("name", "username");

            formElement.submit();
        });

        return (
            <Template
                {...{ kcContext, i18n, doFetchDefaultThemeResources, ...props }}
                displayInfo={social.displayInfo}
                displayWide={realm.password && social.providers !== undefined}
                headerNode={msg("loginAccountTitle")}
                formNode={
                    <div id="kc-form" className={cx(realm.password && social.providers !== undefined && props.kcContentWrapperClass)}>
                        <div
                            id="kc-form-wrapper"
                            className={cx(
                                realm.password && social.providers && [props.kcFormSocialAccountContentClass, props.kcFormSocialAccountClass]
                            )}
                        >
                            {realm.password && (
                                <form id="kc-form-login" onSubmit={onSubmit} action={url.loginAction} method="post">
                                    <div className={cx(props.kcFormGroupClass)}>
                                        {(() => {
                                            const label = !realm.loginWithEmailAllowed
                                                ? "username"
                                                : realm.registrationEmailAsUsername
                                                ? "email"
                                                : "usernameOrEmail";

                                            const autoCompleteHelper: typeof label = label === "usernameOrEmail" ? "username" : label;

                                            return (
                                                <>
                                                    <TextField
                                                        tabIndex={1}
                                                        id={autoCompleteHelper}
                                                        className={classes.inputField}
                                                        //NOTE: This is used by Google Chrome auto fill so we use it to tell
                                                        //the browser how to pre fill the form but before submit we put it back
                                                        //to username because it is what keycloak expects.
                                                        name={autoCompleteHelper}
                                                        defaultValue={login.username ?? ""}
                                                        type="text"
                                                        label={msg(label)}
                                                        placeholder={msgStr(label)}
                                                        {...(usernameEditDisabled
                                                            ? { "disabled": true }
                                                            : {
                                                                  "autoFocus": true,
                                                                  "autoComplete": "off"
                                                              })}
                                                        /* error={Boolean(
                                                        (errors.email || errors.password === t('errors.form.incorrectCredentials')) &&
                                                            touched.email,
                                                        )}
                                                        {...getFieldProps('email')} */
                                                    />
                                                </>
                                            );
                                        })()}
                                    </div>
                                    <div className={cx(props.kcFormGroupClass)}>
                                        <PasswordField
                                            tabIndex={2}
                                            id="password"
                                            className={cx(classes.inputField)}
                                            name="password"
                                            autoComplete="off"
                                            label={msg("password")}
                                            placeholder={msgStr("password")}
                                            /* error={Boolean(errors.password && touched.password)} */
                                            /* {...getFieldProps('password')} */
                                        />
                                    </div>
                                    <div className={cx(props.kcFormGroupClass, props.kcFormSettingClass, classes.passwordNotesWrapper)}>
                                        <div id="kc-form-options">
                                            {realm.rememberMe && !usernameEditDisabled && (
                                                <div className={cx("checkbox", classes.remeberCheckboxWrapper)}>
                                                    <label>
                                                        <input
                                                            className={classes.rememberCheckbox}
                                                            tabIndex={3}
                                                            id="rememberMe"
                                                            name="rememberMe"
                                                            type="checkbox"
                                                            {...(login.rememberMe
                                                                ? {
                                                                      "checked": true
                                                                  }
                                                                : {})}
                                                        />
                                                        {msg("rememberMe")}
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                        <div className={cx(props.kcFormOptionsWrapperClass)}>
                                            {realm.resetPasswordAllowed && (
                                                <span>
                                                    <a className={classes.forgotPasswordLink} tabIndex={5} href={url.loginResetCredentialsUrl}>
                                                        {msg("doForgotPassword")}
                                                    </a>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div id="kc-form-buttons" className={cx(props.kcFormGroupClass, classes.submitWrapper)}>
                                        <input
                                            type="hidden"
                                            id="id-hidden-input"
                                            name="credentialId"
                                            {...(auth?.selectedCredential !== undefined
                                                ? {
                                                      "value": auth.selectedCredential
                                                  }
                                                : {})}
                                        />
                                        <Button
                                            tabIndex={4}
                                            className={classes.submitButton}
                                            name="login"
                                            id="kc-login"
                                            type="submit"
                                            value={msgStr("doLogIn")}
                                            disabled={isLoginButtonDisabled}
                                        >
                                            {msgStr("doLogIn")}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                        {realm.password && social.providers !== undefined && (
                            <div id="kc-social-providers" className={cx(props.kcFormSocialAccountContentClass, props.kcFormSocialAccountClass)}>
                                <ul
                                    className={cx(
                                        props.kcFormSocialAccountListClass,
                                        social.providers.length > 4 && props.kcFormSocialAccountDoubleListClass
                                    )}
                                >
                                    {social.providers.map(p => (
                                        <li key={p.providerId} className={cx(props.kcFormSocialAccountListLinkClass)}>
                                            <a href={p.loginUrl} id={`zocial-${p.alias}`} className={cx("zocial", p.providerId)}>
                                                <span>{p.displayName}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                }
                infoNode={
                    realm.password &&
                    realm.registrationAllowed &&
                    !registrationDisabled && (
                        <div id="kc-registration">
                            <span>
                                {msg("noAccount")}
                                <a tabIndex={6} href={url.registrationUrl}>
                                    {msg("doRegister")}
                                </a>
                            </span>
                        </div>
                    )
                }
            />
        );
    }
);

export default Login;
