# Important style guide for the project

#### links

- Poppins 
~~~
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
~~~
- Box icon 
~~~
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
~~~

#### video setup
~~~
 <video autoplay loop muted plays-inline class="video-bg" poster="./assets/imgs/Hornet_banner_wide-1.jpg">
    <source src="./assets/video/silkgsong-header.mp4">
</video>
~~~


#### CSS Variables
##### color
~~~
--white-color: rgba(255, 255, 255, 1);
--black-color: hsla(0, 0%, 0%, 1);
--text-color: hsla(0,0%,100%,1);
--button-text-color: hsla(352.8260869565217,79.99999999999999%,54.90196078431373%,1);
--bg-color-alt: hsla(352.8260869565217,79.99999999999999%,54.90196078431373%,1);

~~~

##### typography
~~~
--font-display: 'Poppins', sans-serif;
--font-text: 'Poppins', sans-serif;
~~~

##### font size
~~~
--title-font-size: clamp(2rem, 2rem + 4vw, 2.8rem);
--h2-font-size: clamp(1.25rem, 1.25rem + 3vw, 1.75rem);
--h3-font-size: clamp(1.125rem, 1.125rem + 2.5vw, 1.25rem)
--text-font-size: clamp(.938rem, .938rem + 2.5vw, 1rem);
--small-font-size: clamp(.813rem, .948rem + 2.5vw, .875rem);
~~~
##### font weight
~~~
--font-semi-bold: 600;
--font-bold: 700;
~~~

##### margins
~~~
--mb-1: .5rem;
--mb-1-5: 0.75rem;
--mb-2: 1rem;
--mb-3: 1.5rem;
--mb-4: 2rem;
--mb-5: 2.5rem;
--mb-6: 3rem;
~~~
##### padding
~~~
--section-pd-top: clamp(3rem, 3rem + 4vw, 5rem);
--section-pd-bottom: clamp(2rem, 2rem + 4vw, 3.5rem);
--pd-0: .25rem;
--pd-1: .5rem;
--pd-2: 1rem;
--pd-3: 1.5rem;
--pd-4: 2rem;
--pd-5: 2.5rem;
~~~
##### line height
~~~
--line-height: 1.6;
~~~

#####  width
~~~
--max-inline-size: 968px;
~~~
##### height
~~~
--header-nav-block-size: 5.5rem;
--header-block-size: clamp(20vh, 20vh + 10vw, 80vh);
~~~
##### tramsition 
~~~
--transition-ease: 400ms ease;
--slide-transition: 500ms ease;
--reveal-transition: 0.7s ease-out 0.1s;
--store-item-transition: 0.5s ease-out 0.1s;
~~~

#### Utility class
~~~
.container-bd {
    max-width: var(--max-inline-size);
    width: calc(100% - var(--mb-3) * 2);
    margin-inline: var(--mb-3);
}
.grid
{
    display: grid;
    gap: var(--mb-3);
}
.section 
{
    padding-block-start: calc(var(--pd-5) * 1.5);
    padding-block-end: calc(var(--pd-3) * 1.5);
}

~~~