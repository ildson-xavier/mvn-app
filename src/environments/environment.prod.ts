export const environment = {
  production: true,
  keycloakConfig: {
    clientId: 'e-consignado',
    realm: 'Dev',
<<<<<<< HEAD
<<<<<<< HEAD
    url: 'https://sso.teste.cetelem.com.br/auth/'
    //url: 'https://ec-pse-front-dev.teste.cetelem.com.br/auth/'
    //url: 'https://sso-dev-rhsso.apps.alpha.pcloud.cetelem.com.br/auth/'
=======
=======
    /* Para acesso de PRODUCAO no Openshift */
    //url: 'https://sso.cetelem.com.br/auth/'
    /* Para acesso de HOMOLOGACAO no Openshift */
    //url: 'https://sso.teste.cetelem.com.br/auth/'
    /* Para acesso DEV no Openshift */
>>>>>>> hotfix/DEM-1888-comparam-numero-beneficiario
    //url: 'https://ec-pse-front-dev.teste.cetelem.com.br/auth/'
    /* Para acesso local */
    url: 'https://sso-dev-rhsso.apps.alpha.pcloud.cetelem.com.br/auth/'
<<<<<<< HEAD
>>>>>>> 2db835bea81e2cb45c506c62e03938c743d2cf80
=======
>>>>>>> hotfix/DEM-1888-comparam-numero-beneficiario
  }
};

export const baseUrl = `https://poc-bpi.herokuapp.com/api/poc/`;
export const baseLocalUrl = `http://localhost:8765/api/v1/`
export const baseLocalUrlParameter = `https://ec-pse-parameters.cetelem.com.br/api/v1/`;
export const baseLocalUrlRequestDetails = `https://ec-pse-request-details.cetelem.com.br/api/v1/`; 
export const UrlCreditoImg = `src\Credito.png`;