// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'thesomewhatyou', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Work I Guess',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      // always wondered why it didn't work
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['thesomewhatyou/gabe', 'thesomewhatyou/TOSCR-project'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Stuff I Did',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'gabe',
          description: 'discord friend. or foe.',
          // happy eslint you stinky boi
          imageUrl:
            'https://raw.githubusercontent.com/thesomewhatyou/gabe/refs/heads/master/docs/assets/me.jpg',
          // cannot find photo
          // nvm i found it :D
          link: 'https://thesomewhatyou.me/gabe',
        },
        {
          title: 'GabeOS',
          description: 'You get it, at this point.',
          imageUrl:
            'https://raw.githubusercontent.com/thesomewhatyou/GabeOS/refs/heads/master/docs/assets/me.jpg',
          link: 'https://gabeos.dev',
          // guess i'm OOOGLY DOO!  HULLHABA HULLHABA HULLHABA HULLHABA AHHHHHHHHH
        },
      ],
    },
  },
  seo: { title: 'my portfolio.', description: '', imageURL: '' },
  social: {
    x: 'thesomewhatyou',
    reddit: 'minecraftdummy57', // i am a stinky no good redittor
    github: 'thesomewhatyou',
    discord: 'thesomewhatyou',
    website: 'https://www.thesomewhatyou.me',
    phone: '', // i prefer not to get my number scraped thx
    email: 'gabe@thesomewhatyou.me',
  },
  // sorry, lost my resume
  // "but i already gave you an internship!"
  // aw well guess there's nothing you can do abt it now
  // *proceeds to forcefully give me a job so i have to give them a resume*
  // that son of a-
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Bash',
    'Node.js',
    'SQLite',
    'PostgreSQL',
    'Git',
    'Docker',
    'HTML', // duh
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'GabeOS',
      position: 'Founder',
      from: 'July 2025',
      to: 'Present',
      companyLink: 'https://gabeos.dev',
      businessEmail: 'gabriel@gabeos.dev',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  // don't have a blog having a blog is just a narcissistic endeavor anyway
  // says the person who named a whole os over himself + has a domain named after himself
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // do i really need data collection on my personal site
  hotjar: { id: '', snippetVersion: 6 },
  // copilot pls tell me what this does in the next comment
  // i think it tracks user behavior on the site or smth
  // ok thx but if i don't need google analytics then i probably don't need this either
  themeConfig: {
    defaultTheme: 'business',
    // too formal but aesthetic?? i like it but it sounds boring

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['dark', 'business'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and me. Gabriel Piss... not copyright.</footer>`,

  enablePWA: true,
};

export default CONFIG;

// looks good to me
// and i fixed the issue :3
