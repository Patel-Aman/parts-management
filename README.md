<!-- <a href="https://aimeos.org/">
    <img src="https://aimeos.org/fileadmin/template/icons/logo.png" alt="Aimeos logo" title="Aimeos" align="right" height="60" />
</a> -->

# Xiaomi Parts-management project

[![License](https://poser.pugx.org/aimeos/aimeos-typo3/license.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)

<!-- :star: Star us on GitHub — it motivates us a lot! -->

This project is part of [Ode2Code 3.0](https://unstop.com/competitions/xiaomi-ode2code-30-xiaomi-india-713806) competition organized by [Xiaomi](https://www.mi.com). This is frontend of the project developed using Reactjs, tailwind, axios and a template provided by windmill. Frontend includes login, register, profile pages and dashboard for all 4 types of stakeholders. (Planning, Warehouse, Service Centres, and Customer Support teams.).

-   Service centers can create spare parts request and access spare parts available, add spare parts, add customers.
-   Warehouse receives request from service centers via planning team and dispatches the parts to service centers.
-   Planning team will recieve parts request from service centers and assign warehouse to the queries.
-   Customer Support Team will have access to available parts at different service centers and can assign/send a customer to a service center as per parts requirement.

![aimeos-frontend](https://user-images.githubusercontent.com/8647429/212348410-55cbaa00-722a-4a30-8b57-da9e173e0675.jpg)

## Table Of Content

-   [Installation](#installation)
    -   [Composer](#composer)
    -   [DDev or Colima](#ddev)
    -   [TER](#ter-extension)
-   [TYPO3 setup](#typo3-setup)
    -   [Database setup](#database-setup)
    -   [Security](#security)
-   [Page setup](#page-setup)
    -   [Download the Aimeos Page Tree t3d file](#download-the-aimeos-page-tree-t3d-file)
    -   [Go to the Import View](#go-to-the-import-view)
    -   [Upload the page tree file](#upload-the-page-tree-file)
    -   [Go to the import view](#go-to-the-import-view)
    -   [Import the page tree](#import-the-page-tree)
    -   [SEO-friendly URLs](#seo-friendly-urls)
-   [License](#license)
-   [Links](#links)

## Installation

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

This document is for the latest Aimeos TYPO3 **22.10 release and later**.

-   stable release: 23.04 (TYPO3 12 LTS)
-   LTS release: 22.10 (TYPO3 11 LTS)

### Composer

**Note:** composer 2.1+ is required!

The latest TYPO3 version can be installed via composer. This is especially useful, if you want to create new TYPO3 installations automatically or play with the latest code. You need to install the composer package first, if it isn't already available:

```bash
php -r "readfile('https://getcomposer.org/installer');" | php -- --filename=composer
```

To install the TYPO3 base distribution first, execute this command:

```bash
composer create-project typo3/cms-base-distribution myshop
# or install a specific TYPO3 version:
composer create-project "typo3/cms-base-distribution:^12" myshop
```

It will install TYPO3 into the `./myshop/` directory. Change into the directory and install TYPO3 as usual:

```bash
cd ./myshop
touch public/FIRST_INSTALL
```

Open the TYPO3 URL in your browser and follow the setup steps. Afterwards, install the Aimeos extension using:

```bash
composer req -W aimeos/aimeos-typo3:~23.7
```

If composer complains that one or more packages can't be installed because the required minimum stability isn't met, add this to your `composer.json`:

```json
"minimum-stability": "dev",
"prefer-stable": true,
```

If you want a more or less working installation out of the box for new installations, you can install the Bootstrap package too:

```bash
composer req bk2k/bootstrap-package
```

**_Note_**: Remember to create a root page and a root template, which includes the Bootstrap package templates! (See also below.)

Finally, depending on your TYPO3 version, run the following commands from your installation directory:

**For TYPO3 11:**

```bash
php ./vendor/bin/typo3 extension:setup
php ./vendor/bin/typo3 aimeos:setup --option=setup/default/demo:1
```

If you don't want to add the Aimeos demo data, you should remove `--option=setup/default/demo:1` from the Aimeos setup command.

**For TYPO3 10:**

```bash
php ./vendor/bin/typo3 extension:activate scheduler
php ./vendor/bin/typo3 extension:activate aimeos
```

If you experience any errors with the database, please check the [Database Setup](#database-setup) section below.

Please keep on reading below the "TER Extension" installation section!

### DDev

_Note:_ Installation instructions for TYPO3 with `ddev` or `Colima` can be found here:
[TYPO3 with ddev or colima](https://ddev.readthedocs.io/en/latest/users/quickstart/)

### TER Extension

If you want to install Aimeos into a traditionally installed TYPO3 ("legacy installation"), the [Aimeos extension from the TER](https://typo3.org/extensions/repository/view/aimeos) is recommended. You can download and install it directly from the Extension Manager of your TYPO3 instance.

-   Log into the TYPO3 backend
-   Click on "Admin Tools::Extensions" in the left navigation
-   Click the icon with the little plus sign left from the Aimeos list entry

![Install Aimeos TYPO3 extension](https://user-images.githubusercontent.com/213803/211545083-d0820b63-26f2-453e-877f-ecd5ec128713.jpg)

Afterwards, you have to execute the update script of the extension to create the required database structure:

-   Click on "Admin Tools::Upgrade"
-   Click "Run Upgrade Wizard" in the "Upgrade Wizard" tile
-   Click "Execute"

![Execute update script](https://user-images.githubusercontent.com/213803/211545122-8fd94abd-78b2-47ad-ad3c-1ef1b9c052b4.jpg)

#### Aimeos Distribution

For new TYPO3 installations, there is a 1-click [Aimeos distribution](https://typo3.org/extensions/repository/view/aimeos_dist) available, too. Choose the Aimeos distribution from the list of available distributions in the Extension Manager and you will get a completely set up shop system including demo data for a quick start.

## TYPO3 Setup

Setup TYPO3 by creating a `FIRST_INSTALL` file in the `./public` directory:

```bash
touch public/FIRST_INSTALL
```

Open the URL of your installation in the browser and follow the steps in the TYPO3 setup scripts.

### Database Setup

If you use MySQL < 5.7.8, you have to use `utf8` and `utf8_unicode_ci` instead because those MySQL versions can't handle the long indexes created by `utf8mb4` (up to four bytes per character) and you will get errors like

```
1071 Specified key was too long; max key length is 767 bytes
```

To avoid that, change your database settings in your `./typo3conf/LocalConfiguration.php` to:

```php
    'DB' => [
        'Connections' => [
            'Default' => [
                'tableoptions' => [
                    'charset' => 'utf8',
                    'collate' => 'utf8_unicode_ci',
                ],
                // ...
            ],
        ],
    ],
```

### Security

Since **TYPO3 9.5.14+** implements **SameSite cookie handling** and restricts when browsers send cookies to your site. This is a problem when customers are redirected from external payment provider domain. Then, there's no session available on the confirmation page. To circumvent that problem, you need to set the configuration option `cookieSameSite` to `none` in your `./typo3conf/LocalConfiguration.php`:

```php
    'FE' => [
        'cookieSameSite' => 'none'
    ]
```

## Site Setup

TYPO3 10+ requires a site configuration which you have to add in "Site Management" > "Sites" available in the left navigation. When creating a root page (a page with a globe icon), a basic site configuration is automatically created (see below at [Go to the Import View](#go-to-the-import-view)).

## Page Setup

### Download the Aimeos Page Tree t3d file

The page setup for an Aimeos web shop is easy, if you import the example page tree for TYPO3 10/11. You can download the version you need from here:

-   [23.4+ page tree](https://aimeos.org/fileadmin/download/Aimeos-pages_2023.04.t3d) and later
-   [22.10 page tree](https://aimeos.org/fileadmin/download/Aimeos-pages_2022.10.t3d)
-   [21.10 page tree](https://aimeos.org/fileadmin/download/Aimeos-pages_21.10.t3d)

**Note:** The Aimeos layout expects [Bootstrap](https://getbootstrap.com) providing the grid layout!

In order to upload and install the file, follow the following steps:

### Go to the Import View

**Note:** It is recommended to import the Aimeos page tree to a page that is defined as "root page". To create a root page, simply create a new page and, in the "Edit page properties", activate the "Use as Root Page" option under "Behaviour". The icon of the root page will change to a globe. This will also create a basic site configuration. Don't forget to also create a typoscript root template and include the bootstrap templates with it!

![Create a root page](https://user-images.githubusercontent.com/213803/211549273-1d3883dd-710c-4e27-8dbb-3de6e45680d7.jpg)

-   In "Web::Page", right-click on the root page (the one with the globe)
-   Click on "More options..."
-   Click on "Import"

![Go to the import view](https://user-images.githubusercontent.com/213803/211550212-df6daa73-74cd-459e-8d25-a56c413c175d.jpg)

### Upload the page tree file

-   In the page import dialog
-   Select the "Upload" tab (2nd one)
-   Click on the "Select" dialog
-   Choose the T3D file you've downloaded
-   Press the "Upload files" button

![Upload the page tree file](https://user-images.githubusercontent.com/8647429/212347778-17238e05-7494-4413-adb3-a54b2b524e05.png)

### Import the page tree

-   In Import / Export view
-   Select the uploaded file from the drop-down menu
-   Click on the "Preview" button
-   The pages that will be imported are shown below
-   Click on the "Import" button that has appeared
-   Confirm to import the pages

![Import the uploaded page tree file](https://user-images.githubusercontent.com/8647429/212348040-c3e10b60-5579-4d1b-becc-72548826c6db.png)

Now you have a new page "Shop" in your page tree including all required sub-pages.

### SEO-friendly URLs

TYPO3 9.5 and later can create SEO friendly URLs if you add the rules to the site config:
[https://aimeos.org/docs/latest/typo3/setup/#seo-urls](https://aimeos.org/docs/latest/typo3/setup/#seo-urls)

## License

The Aimeos TYPO3 extension is licensed under the terms of the GPL Open Source
license and is available for free.

## Links

-   [Web site](https://aimeos.org/integrations/typo3-shop-extension/)
-   [Documentation](https://aimeos.org/docs/TYPO3)
-   [Forum](https://aimeos.org/help/typo3-extension-f16/)
-   [Issue tracker](https://github.com/aimeos/aimeos-typo3/issues)
-   [Source code](https://github.com/aimeos/aimeos-typo3)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
