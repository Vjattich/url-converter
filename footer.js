(function () {
    const cfg = document.currentScript.dataset;
    const guide = 'guide' in cfg;
    const tech = cfg.tgTech || 'https://t.me/arsinioum';
    const live = cfg.tgLive || 'https://t.me/+oju8lTGAetsxOWJi';

    const ink = 'var(--ink, #1c1200)';
    const bg = 'var(--bg, orange)';

    document.head.insertAdjacentHTML('beforeend', `<style>
        footer {
            position: fixed;
            bottom: 1em;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5em;
            padding: 0 1em;
            z-index: 10;
        }

        footer .box40, footer .tg, footer .question-mark {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1px;
            width: 40px;
            height: 40px;
            border-radius: var(--radius, 8px);
            background: ${ink};
            color: ${bg};
            fill: ${bg};
            text-decoration: none;
            cursor: pointer;
        }

        footer .box40 svg {
            width: 26px;
            height: 26px;
        }

        footer .tg svg {
            width: 20px;
            height: 20px;
            fill: ${bg};
        }

        footer .tg-label {
            font-family: sans-serif;
            font-size: 0.55rem;
            line-height: 1;
            letter-spacing: 0.04em;
        }

        footer .guide-nav {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0 10px;
            display: none;
            transition: transform 0.1s ease;
            user-select: none;
            align-items: center;
            justify-content: center;
            height: 40px;
            flex-shrink: 0;
        }

        footer .guide-nav svg {
            display: block;
            fill: ${ink};
        }

        footer .guide-nav:active {
            transform: scale(0.85);
        }

        footer #icon-question {
            fill: ${bg};
        }

        footer #icon-x {
            display: none;
            stroke: ${bg};
        }

        body.tutorial-on footer #icon-question {
            display: none;
        }

        body.tutorial-on footer #icon-x {
            display: block;
        }

        body.tutorial-on footer .guide-nav {
            display: flex;
        }

        @media screen and (max-width: 200px), screen and (max-height: 200px) {
            footer {
                display: none;
            }
        }
    </style>`);

    const tg = (href, label) => `<a class="tg" href="${href}" target="_blank" aria-label="Telegram ${label} channel"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.27 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg><span class="tg-label">${label}</span></a>`;

    const nav = (id, d, label) => `<button class="guide-nav" id="${id}" aria-label="${label}"><svg height="40" width="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg></button>`;

    const github = cfg.repo ? `<a class="box40" href="${cfg.repo}" target="_blank" aria-label="Source on GitHub"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.609-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>` : '';

    const steam = cfg.steam ? `<a class="box40" id="steamGuideBtn" href="${cfg.steam}" target="_blank" aria-label="Steam guide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg></a>` : '';

    const question = guide ? `<span class="question-mark"><svg id="icon-question" height="40" width="40" viewBox="0 0 29.536 29.536" xmlns="http://www.w3.org/2000/svg"><path d="M14.385,19.337c-1.338,0-2.289,0.951-2.289,2.34c0,1.336,0.926,2.339,2.289,2.339c1.414,0,2.314-1.003,2.314-2.339 C16.672,20.288,15.771,19.337,14.385,19.337z"/><path d="M14.742,6.092c-1.824,0-3.34,0.513-4.293,1.053l0.875,2.804c0.668-0.462,1.697-0.772,2.545-0.772 c1.285,0.027,1.879,0.644,1.879,1.543c0,0.85-0.67,1.697-1.494,2.701c-1.156,1.364-1.594,2.701-1.516,4.012l0.025,0.669h3.42 v-0.463c-0.025-1.158,0.387-2.162,1.311-3.215c0.979-1.08,2.211-2.366,2.211-4.321C19.705,7.968,18.139,6.092,14.742,6.092z"/></svg><svg id="icon-x" height="40" width="40" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M7 7l10 10M17 7l-10 10"/></svg></span>` : '';

    const prev = guide ? nav('guidePrev', 'M22,11 H5.41 l5.3,-5.29 A1,1 0 1,0 9.29,4.29 l-7,7 a1,1 0 0,0 0,1.42 l7,7 a1,1 0 0,0 1.42,-1.42 L5.41,13 H22 a1,1 0 0,0 0,-2 Z', 'Previous step') : '';
    const next = guide ? nav('guideNext', 'M2,11 H18.59 l-5.3,-5.29 A1,1 0 1,1 14.71,4.29 l7,7 a1,1 0 0,1 0,1.42 l-7,7 a1,1 0 0,1 -1.42,-1.42 L18.59,13 H2 a1,1 0 0,1 0,-2 Z', 'Next step') : '';

    document.body.insertAdjacentHTML('beforeend', `<footer>${prev}${github}${steam}${tg(tech, 'tech')}${tg(live, 'live')}${question}${next}</footer>`);
})();