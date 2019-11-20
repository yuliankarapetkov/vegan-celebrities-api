import * as admin from 'firebase-admin';

const serviceAccount = {
    type: 'service_account',
    project_id: 'vegan-celebrities',
    private_key_id: 'af5cd312ee8f4b5f5fb368fbbc95a31a51b3d30a',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC+vOxl0+0gjPX4\nhSWnz+fdS3kkWQWLpTM8sudxGKHkK0nG1wDsToPQMrWbKJHZ3vtK+aUuDCthvasd\nSfl8qOKUjUiUH2VzstoOknZ1+wvKKxiikbM5d4NO2MGCkJ374C7a1/GMvVC0+oNt\nHOCGMJukIxV9L8f7J9xLFnhi9PzAWfB2f2HY/V//wQRqHg4ogeIBMEVoL/IwLbRN\npkSE0iPtJKvPseofxuyNhlyWCEiSQVskMKBOI3GUAONPMMYiZg23g5hVDtI1BHzr\nSG2cfzrghM7M39Y/QaSECsukDdT4AFqPjStS8cu6PnEg4xCM953RcDVHLlZeNKvD\nR813BQ+7AgMBAAECggEATEXCBoozlcOojKO5xhxWbODEZauPkyMRlSE5eblO663/\nx5qsjNJs1XGhu5UClewb8wRXcE1/f4tYBNNTB+2FBcBlmI3hhN2tYwxggJdORJ7t\nL/0xfTZ0dLAq2ao48sLYGb0mo5AE2QogSh61DhQb+QvqiO/1eVKcPg6TP4cWF1hv\nCgLOp8urpY6qHDSoZJuDbd8+kc7DHld9z118VxKE4F0OAGAg4ME90vdNFsmAPOsj\nC+VMyXnp1u9TNWLE3CdhjkwpwoWGjoLo1kkp59sP0za/DZt7G2JYwR8b27w0Vlz4\nQOx+8mdr8wvdA29MaYrPNQDcqPxTV3XKB9G2vdBfuQKBgQDjZWDmMibtOKjoPlWO\nk+bDJ+QPjDY1I3BuvE2A9sv8Wz5gTqDc73mF1DjQyNtEse01g9F/QTFbFWU45M1x\nDSaSELDkb7SCx2+a8Lang0D3ijugM6V4XEUefBlZpgEiJNdLlsmLs6faBRa1mSdq\nVs3k5fKSdZ8dQRovaMlCwobITQKBgQDWuxSmRmkqRkkGCYIZ/xoM7goGeOvAOTV1\n37IvwPKvyomPY+WeapbQlO8a1sq8NhnogV+F30qJmM4ltIU+61baEPMTF4U41Vs3\ncMHQF2q2WOhxcKyZ2yhS2ZLvtoZfb7caseCgipsHLwmCMlgy6DqJQwPJ2sLsiBrk\nJ/mHsPS8JwKBgQDLzGA771bT5KP9AWDMl+GJpobPKGqs1UY++KS9oHLRiTUuO0oQ\nuM/BEaKZ/GoH9y8Rd0KbOmJxr4s4olc9qvuWjT78fODbFMMBqhsJpqjjMhCeU6tJ\nY+jOmYpevljlsP8Dz/ByNGGLFGR1/P1GYOXG8A+nE6O3JFHDi7ZVDuKdQQKBgQCD\njCaxWo9Qs7BGv4pxjKOT6jxADNI4d5O1u634rVa/tO+i5YslCp2L+MGmipG2zdn/\nY0p2w/1w4CjiVn4OtrQFcb7IIm+eCq8P/sbtSXs5bKwx2toSg31njB0FN6eITfM5\nqmE3WNJyizFjDp6TyUsbDfADOD6UEymOPqMSqqiznwKBgQCs31NcDcfahJobFgL5\n4wRuSfAgrzBwvH+71HrGamfWSTX8k9lwRL5huhohqg2gQvkNkfAPbQma/mQJE0Wj\nEkMadkBWFcQpIIfKKg4TO71XJalcfNHFzW5TwOxMMzu4i4OsscAdsxrretC70mVM\n7kIFZ5kv1N6aXoW6YcghVzLkgw==\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-j0tj5@vegan-celebrities.iam.gserviceaccount.com',
    client_id: '116939419381725287453',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j0tj5%40vegan-celebrities.iam.gserviceaccount.com'
};

export const firebaseAdminConfig = {
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://vegan-celebrities.firebaseio.com'
};
