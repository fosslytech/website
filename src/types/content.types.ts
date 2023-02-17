// Translations

export interface ITranslations {
  header: {
    appName: string;
    selectLangOptions: {
      en: string;
    };
  };
  footer: {
    appName: string;
    description: string;
    links: {
      title: string;
      links: string[];
    }[];
  };
  navbar: {
    links: string[];
  };
  pages: {
    home: {
      hero: {
        title1: string;
        title2: string;
        title3: string;
        title4: string;
        description: string;
        githubBtn: string;
        discordBtn: string;
      };

      products: {
        title: string;
        description: string;
        cards: {
          title: string;
          description: string;
          codeBtn: string;
          appBtn: string;
        }[];
      };
    };
    error: {
      title: string;
      '404': string;
      '401': string;
      '500': string;
      button: string;
    };
  };
  components: {};
}
