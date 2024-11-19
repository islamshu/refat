<!DOCTYPE html>
<html lang="en-MY" dir="ltr">

<head>
    <title>        {{ get_general_value('website_name') }}
    </title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height" />
    <meta name="referrer" content="origin" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/cleave.js/1.0.2/cleave.min.js"
        integrity="sha512-SvgzybymTn9KvnNGu0HxXiGoNeOi0TTK7viiG0EGn2Qbeu/NFi3JdWrJs2JHiGA1Lph+dxiDv5F9gDlcgBzjfA=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js"
        integrity="sha512-6sSYJqDreZRZGkJ3b+YfdhB3MzmuP9R7X1QZ6g5aIXhRvR1Y/N/P47jmnkENm7YL3oqsmI6AK+V6AD99uWDnIw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <link rel="icon" type="image/png"
        href="{{ asset('uploads/' . get_general_value('website_icon')) }}">



</head>

<body class="">

    <style>
        .container {
            max-width: 1115px;
        }

        .form-control,
        .form-select {
            height: 50px !important;
            margin-bottom: 10px !important;
        }

        ::placeholder,
        .form-select {
            font-size: 14px;
            color: #5e5e5e !important;
            text-transform: capitalize;
        }

        .form-select:focus,
        .form-control:focus {
            box-shadow: unset !important;
            border-color: #000;
            border-width: 2px;
        }

        .content h6 {
            font-size: 20px;
            margin-bottom: 10px;
            margin-top: 10px;
            text-transform: capitalize;
            color: #383838;
        }

        .content h5 {
            font-size: 18px;
            margin-bottom: 20px;
            margin-top: 10px;
            text-transform: capitalize;
            color: #383838;
        }

        .box1::-webkit-scrollbar {
            display: none;
        }


        .form-content {}

        .form-content .btns {
            display: flex;
        }

        .form-content .btns a {
            display: block;
            width: 49%;
            margin: .5%;
            padding: 10px 12px;
            border-radius: 4px;
            text-align: center;
            line-height: 3;
        }

        .form-check-input {
            width: 1.7em;
            height: 1.7em;
        }

        .form-check-input:checked {
            background-color: #000;
            border-color: #000;
        }

        .form-check-input:focus {
            box-shadow: none;
        }

        .form-check {
            line-height: 2rem;
        }

        .form-check-label {
            margin-left: 5px;
            font-size: 14px;
        }


        .form-content .btns a:first-child {

            background-color: #592FF4;

        }

        .form-content .btns a:last-child {

            background-color: #000;

        }

        .form-control {
            font-size: 16px !important;
        }

        .form-content .btns a images {}

        @media(min-width: 992px) {
            .col-lg-7 {
                width: 55.333333%;
            }

            .col-lg-5 {
                width: 44.666667%;
            }
        }


        .bg-gray {
            background-color: #F5F5F5;
            border-left: 1px solid #dbdbdb;
        }



        .col-paddingS {
            padding: 20px 30px 100px 196px;
        }

        .col-paddingE {
            padding: 20px 196px 0px 30px;
        }

        .h-auto {
            height: 100vh;
            overflow-y: scroll;
        }


        @media(max-width:570px) {
            .col-paddingS {
                padding: 20px;
            }

            .col-paddingE {
                padding: 20px;
            }

            .bg-gray {
                background-color: transparent;
                border-left: unset;
            }

            .h-auto {
                height: unset;
                overflow-y: unset;
            }

        }



        :root {


            --x-skeleton-color-global-accent: hsl(204, 77%, 39%);
            --x-skeleton-color-global-background: hsl(0, 0%, 100%);
            --x-skeleton-color-global-backgroundSubdued: hsl(0, 0%, 96%);
            --x-skeleton-color-global-border: hsl(0, 0%, 87%);
            --x-skeleton-color-global-text: hsl(0, 0%, 0%);
            --x-skeleton-color-global-textContrast: hsl(0, 0%, 100%);
            --x-skeleton-color-global-textSubdued: hsl(0, 0%, 44%);
            --x-skeleton-color-global-textSubdued200: hsl(0, 0%, 90%);

            --x-skeleton-color-schemes-scheme2-base-background: hsl(0, 0%, 96%);
            --x-skeleton-color-schemes-scheme2-base-backgroundSubdued: hsl(0, 0%, 93%);
            --x-skeleton-color-schemes-scheme2-base-border: hsl(0, 0%, 84%);
            --x-skeleton-color-schemes-scheme2-base-text: hsl(0, 0%, 0%);
            --x-skeleton-color-schemes-scheme2-base-textContrast: hsl(0, 0%, 96%);
            --x-skeleton-color-schemes-scheme2-base-textSubdued: hsl(0, 0%, 40%);
            --x-skeleton-color-schemes-scheme2-base-textSubdued200: hsl(0, 0%, 80%);

            --x-skeleton-color-global-accent: #272759;






            --x-skeleton-typography-line-small: 1.2;
            --x-skeleton-typography-line-base: 1.5;
            --x-skeleton-line-quantity-size: 2.1rem;

            --x-skeleton-typography-size-small: 1.2rem;
            --x-skeleton-typography-size-default: 1.4rem;
            --x-skeleton-typography-size-medium: 1.6rem;
            --x-skeleton-typography-size-large: 1.9rem;
            --x-skeleton-typography-size-extra-large: 2.1rem;
            --x-skeleton-typography-size-extra-extra-large: 2.4rem;

            --x-skeleton-typography-primary-weight-bold: 400;
            --x-skeleton-typography-primary-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

            --x-skeleton-typography-secondary-weight-bold: 600;
            --x-skeleton-typography-secondary-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

            --x-skeleton-spacing-none: 0;
            --x-skeleton-spacing-small-100: 1.1rem;
            --x-skeleton-spacing-small-200: 0.9rem;
            --x-skeleton-spacing-small-300: 0.7rem;
            --x-skeleton-spacing-small-400: 0.5rem;
            --x-skeleton-spacing-small-500: 0.3rem;
            --x-skeleton-spacing-base: 1.4rem;
            --x-skeleton-spacing-large-100: 1.7rem;
            --x-skeleton-spacing-large-200: 2.1rem;
            --x-skeleton-spacing-large-300: 2.6rem;
            --x-skeleton-spacing-large-400: 3.2rem;
            --x-skeleton-spacing-large-500: 3.8rem;

            --x-skeleton-border-radius-none: 0;
            --x-skeleton-border-radius-base: 5px;
            --x-skeleton-border-radius-small: 2px;
            --x-skeleton-border-radius-large: 10px;
        }



        @keyframes SkeletonPulse {
            50% {
                opacity: 1;
            }

            75% {
                opacity: 0.5;
            }

            100% {
                opacity: 1;
            }
        }

        *,
        :after,
        :before {
            box-sizing: border-box;
        }

        body,
        html {
            height: 100%;
            margin: 0;
            width: 100%;
        }

        html {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
            font-size: 62.5%;
            font-family: var(--x-skeleton-typography-primary-fonts);
            line-height: var(--x-skeleton-typography-line-base);
        }

        body {
            -webkit-font-smoothing: subpixel-antialiased;
            overflow-wrap: break-word;
            overflow-x: hidden;
            overflow-y: scroll;
        }

        body.Loading {
            position: fixed;
        }

        /* TODO: need to take it out of the accessibility tree, too? */
        body.Loading>.LoadingShell {
            opacity: 1;
        }


        .BlockStack {
            display: grid;
        }

        .BlockStack--spacing-small500 {
            gap: var(--x-skeleton-spacing-small-500);
        }

        .BlockStack--spacing-small300 {
            gap: var(--x-skeleton-spacing-small-300);
        }

        .BlockStack--spacing-small100 {
            gap: var(--x-skeleton-spacing-small-100);
        }

        .BlockStack--spacing-base {
            gap: var(--x-skeleton-spacing-base);
        }

        .BlockStack--spacing-large100 {
            gap: var(--x-skeleton-spacing-large-100);
        }

        .BlockStack--spacing-large200 {
            gap: var(--x-skeleton-spacing-large-200);
        }

        .BlockStack--min-inline-size-full {
            flex: 1;
        }

        .BlockStack--inline-alignment-center {
            justify-items: center;
        }

        .BlockStack--inline-alignment-end {
            justify-items: end;
        }

        .LoadingHeaderHeading {
            margin: 0;
            font-size: var(--x-skeleton-typography-size-extra-large);
            font-weight: var(--x-skeleton-typography-secondary-weight-bold);
            font-family: var(--x-skeleton-typography-secondary-fonts);
            line-height: var(--x-skeleton-typography-line-small);
        }

        .LoadingHeaderImage {
            display: block;
            max-width: 100%;
            height: auto;
        }

        .InlineStack {
            display: flex;
            min-height: 100%;
            min-width: 100%;
        }

        .InlineStack--spacing-base {
            column-gap: var(--x-skeleton-spacing-base);
        }

        .InlineStack--spacing-small100 {
            column-gap: var(--x-skeleton-spacing-small-100);
        }

        .InlineStack--spacing-large200 {
            column-gap: var(--x-skeleton-spacing-large-200);
        }

        .InlineStack--inline-alignment-spaceBetween {
            justify-content: space-between;
        }

        .InlineStack--block-alignment-start {
            align-items: start;
        }

        .InlineStack--block-alignment-center {
            align-items: center;
        }

        .Divider {
            width: 100%;
            height: 1px;
            background-color: var(--x-skeleton-default-color-border);
        }

        .SkeletonButton {
            background-color: var(--x-skeleton-default-color-textSubdued200);
            border-radius: var(--x-skeleton-border-radius-base);
            animation: SkeletonPulse 4000ms ease infinite;
            width: 100%;
        }

        .SkeletonButtonInner {
            width: 100%;
            height: 4.8rem;
        }

        .SkeletonImage {
            background-color: var(--x-skeleton-default-color-textSubdued200);
            animation: SkeletonPulse 4000ms ease infinite;
            width: 100%;
        }

        .SkeletonImage--corner-radius-small {
            border-radius: var(--x-skeleton-border-radius-small);
        }

        .SkeletonImage--corner-radius-base {
            border-radius: var(--x-skeleton-border-radius-base);
        }

        .SkeletonImage--corner-radius-large {
            border-radius: var(--x-skeleton-border-radius-large);
        }

        .SkeletonImage--corner-radius-rounded {
            border-radius: 100%;
        }

        .SkeletonImageInner {
            width: 100%;
            height: 100%;
        }

        @supports (aspect-ratio: 1) {
            .SkeletonImage {
                aspect-ratio: 1;
            }
        }

        @supports not (aspect-ratio: 1) {
            .SkeletonImage::before {
                content: "";
                height: 0;
                display: block;
                padding-bottom: 100%;
                padding-bottom: calc(100% / 1);
            }
        }

        .SkeletonText {
            background-color: var(--x-skeleton-default-color-textSubdued200);
            border-radius: var(--x-skeleton-border-radius-base);
            animation: SkeletonPulse 4000ms ease infinite;
        }

        .SkeletonTextInner {
            display: inline-block;
        }

        .SkeletonTextInner--inline-size-small {
            width: 10ch;
        }

        .SkeletonTextInner--inline-size-base {
            width: 20ch;
        }

        .SkeletonTextInner--inline-size-large {
            width: 30ch;
        }

        .SkeletonTextInner--inline-size-full {
            width: 100%;
        }

        .Icon {
            fill: none;
            color: var(--x-skeleton-default-color-border);
            stroke: currentColor;
        }

        .Icon path {
            vector-effect: non-scaling-stroke;
            stroke-width: 1.4px;
        }

        .LoadingShellLineItems {
            display: grid;
            grid-auto-flow: row;
            align-items: stretch;
            gap: var(--x-skeleton-spacing-base);
        }

        .LoadingShellLine {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: var(--x-skeleton-spacing-base);
            align-items: center;
            font-size: var(--x-type-size-base);
        }

        .LoadingShellLineImageWrapper {
            width: 6.4rem;
            height: 6.4rem;
            position: relative;
        }

        .LoadingShellImageWrapper--Small {
            width: 3.2rem;
            height: 3.2rem;
            position: relative;
        }

        .LoadingShellLineImage {
            width: 6.4rem;
            height: 6.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            object-fit: contain;
            background: var(--x-skeleton-default-color-backgroundSubdued);
        }

        .LoadingShellLineImage--border-full {
            border: 1px solid var(--x-skeleton-default-color-border);
        }

        .LoadingShellLineImage--corner-radius-small {
            border-radius: var(--x-skeleton-border-radius-small);
        }

        .LoadingShellLineImage--corner-radius-base {
            border-radius: var(--x-skeleton-border-radius-base);
        }

        .LoadingShellLineImage--corner-radius-large {
            border-radius: var(--x-skeleton-border-radius-large);
        }

        .LoadingShellLineImage--corner-radius-rounded {
            border-radius: 100%;
        }

        .LoadingShellLineImageIcon {
            width: 3.3rem;
            height: 3.3rem;
        }

        .LoadingShellLineQuantity {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(25%, -50%);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 2.2rem;
            min-height: 2.2rem;
            padding: 0 var(--x-skeleton-spacing-small-300);
            border-radius: 1.1rem;
            background: var(--x-skeleton-default-color-textSubdued);
            color: var(--x-skeleton-default-color-textContrast);
            font-size: var(--x-skeleton-typography-size-small);
            font-weight: 500;
        }

        .LoadingShellLineQuantity--corner-radius-none {
            border-radius: 0;
        }

        .LoadingShellLineContent {
            display: flex;
            flex-direction: column;
            align-self: baseline;
            min-height: 6.4rem;
            justify-content: center;
        }

        .LoadingShellLinePrice {
            display: flex;
            align-self: baseline;
        }

        .Text {
            font-size: var(--x-skeleton-typography-size-default);
        }

        .Text--size-small {
            font-size: var(--x-skeleton-typography-size-small);
        }

        .Text--size-large {
            font-size: var(--x-skeleton-typography-size-large);
        }

        .Text--size-extraExtraLarge {
            font-size: var(--x-skeleton-typography-size-extra-extra-large);
        }

        .Text--appearance-subdued {
            color: var(--x-skeleton-default-color-textSubdued);
        }

        .SkeletonExpressCheckoutButtons {
            display: grid;
            gap: var(--x-skeleton-spacing-small-100);
            grid-template-columns: repeat(2, 1fr);
        }

        .SkeletonExpressCheckoutButtons>*:first-child {
            grid-column: 1 / -1;
        }

        .SkeletonExpressCheckout {
            margin-bottom: var(--x-skeleton-spacing-large-500);
        }

        .ExpressCheckoutDivider {
            display: flex;
            place-items: center;
            height: 21px;
            padding-top: calc(var(--x-skeleton-spacing-large-500) - 1px);
        }

        @media screen and (min-width: 1000px) {
            .SkeletonExpressCheckoutButtons {
                grid-template-columns: repeat(3, 1fr);
            }

            .SkeletonExpressCheckoutButtons>*:first-child {
                grid-column: auto;
            }

            .SkeletonExpressCheckoutButtons {
                grid-template-columns: repeat(3, 1fr);
            }

            .SkeletonExpressCheckoutButtons>*:first-child {
                grid-column: auto;
            }
        }

        .LoadingShellHeader--banner {
            background-position: 50% 50%;
            background-size: cover;
            background-image: var(--x-skeleton-banner-image);
            --x-skeleton-header-shop-name-color: #fff;
            --x-skeleton-cart-color: #fff;
        }


        .VisuallyHidden {
            border-width: 0;
            clip: rect(0, 0, 0, 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
            white-space: nowrap;
        }

        .FadeIn {
            opacity: 0;
            animation: 400ms FadeIn 150ms forwards;
        }

        @keyframes FadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }



        .colorSchemeScheme1 {
            --x-skeleton-default-color-background: var(--x-skeleton-color-schemes-scheme1-base-background, var(--x-skeleton-color-global-background));
            --x-skeleton-default-color-accent: var(--x-skeleton-color-schemes-scheme1-base-accent, var(--x-skeleton-color-global-accent));
            --x-skeleton-default-color-backgroundSubdued: var(--x-skeleton-color-schemes-scheme1-base-backgroundSubdued, var(--x-skeleton-color-global-backgroundSubdued));
            --x-skeleton-default-color-border: var(--x-skeleton-color-schemes-scheme1-base-border, var(--x-skeleton-color-global-border));
            --x-skeleton-default-color-text: var(--x-skeleton-color-schemes-scheme1-base-text, var(--x-skeleton-color-global-text));
            --x-skeleton-default-color-textContrast: var(--x-skeleton-color-schemes-scheme2-base-textContrast, var(--x-skeleton-color-global-textContrast));
            --x-skeleton-default-color-textSubdued: var(--x-skeleton-color-schemes-scheme1-base-textSubdued, var(--x-skeleton-color-global-textSubdued));
            --x-skeleton-default-color-textSubdued200: var(--x-skeleton-color-schemes-scheme1-base-textSubdued200, var(--x-skeleton-color-global-textSubdued200));
        }

        .colorSchemeScheme2 {
            --x-skeleton-default-color-background: var(--x-skeleton-color-schemes-scheme2-base-background, var(--x-skeleton-color-global-background));
            --x-skeleton-default-color-accent: var(--x-skeleton-color-schemes-scheme2-base-accent, var(--x-skeleton-color-global-accent));
            --x-skeleton-default-color-backgroundSubdued: var(--x-skeleton-color-schemes-scheme2-base-backgroundSubdued, var(--x-skeleton-color-global-backgroundSubdued));
            --x-skeleton-default-color-border: var(--x-skeleton-color-schemes-scheme2-base-border, var(--x-skeleton-color-global-border));
            --x-skeleton-default-color-text: var(--x-skeleton-color-schemes-scheme2-base-text, var(--x-skeleton-color-global-text));
            --x-skeleton-default-color-textContrast: var(--x-skeleton-color-schemes-scheme2-base-textContrast, var(--x-skeleton-color-global-textContrast));
            --x-skeleton-default-color-textSubdued: var(--x-skeleton-color-schemes-scheme2-base-textSubdued, var(--x-skeleton-color-global-textSubdued));
            --x-skeleton-default-color-textSubdued200: var(--x-skeleton-color-schemes-scheme2-base-textSubdued200, var(--x-skeleton-color-global-textSubdued200));
        }

        .colorSchemeScheme3 {
            --x-skeleton-default-color-background: var(--x-skeleton-color-schemes-scheme3-base-background, var(--x-skeleton-color-global-background));
            --x-skeleton-default-color-accent: var(--x-skeleton-color-schemes-scheme3-base-accent, var(--x-skeleton-color-global-accent));
            --x-skeleton-default-color-backgroundSubdued: var(--x-skeleton-color-schemes-scheme3-base-backgroundSubdued, var(--x-skeleton-color-global-backgroundSubdued));
            --x-skeleton-default-color-border: var(--x-skeleton-color-schemes-scheme3-base-border, var(--x-skeleton-color-global-border));
            --x-skeleton-default-color-text: var(--x-skeleton-color-schemes-scheme3-base-text, var(--x-skeleton-color-global-text));
            --x-skeleton-default-color-textContrast: var(--x-skeleton-color-schemes-scheme2-base-textContrast, var(--x-skeleton-color-global-textContrast));
            --x-skeleton-default-color-textSubdued: var(--x-skeleton-color-schemes-scheme3-base-textSubdued, var(--x-skeleton-color-global-textSubdued));
            --x-skeleton-default-color-textSubdued200: var(--x-skeleton-color-schemes-scheme3-base-textSubdued200, var(--x-skeleton-color-global-textSubdued200));
        }

        .colorSchemeScheme4 {
            --x-skeleton-default-color-background: var(--x-skeleton-color-schemes-scheme4-base-background, var(--x-skeleton-color-global-background));
            --x-skeleton-default-color-accent: var(--x-skeleton-color-schemes-scheme4-base-accent, var(--x-skeleton-color-global-accent));
            --x-skeleton-default-color-backgroundSubdued: var(--x-skeleton-color-schemes-scheme4-base-backgroundSubdued, var(--x-skeleton-color-global-backgroundSubdued));
            --x-skeleton-default-color-border: var(--x-skeleton-color-schemes-scheme4-base-border, var(--x-skeleton-color-global-border));
            --x-skeleton-default-color-text: var(--x-skeleton-color-schemes-scheme4-base-text, var(--x-skeleton-color-global-text));
            --x-skeleton-default-color-textContrast: var(--x-skeleton-color-schemes-scheme2-base-textContrast, var(--x-skeleton-color-global-textContrast));
            --x-skeleton-default-color-textSubdued: var(--x-skeleton-color-schemes-scheme4-base-textSubdued, var(--x-skeleton-color-global-textSubdued));
            --x-skeleton-default-color-textSubdued200: var(--x-skeleton-color-schemes-scheme4-base-textSubdued200, var(--x-skeleton-color-global-textSubdued200));
        }


        .backgroundColorBase {
            background-color: var(--x-skeleton-default-color-background);
            color: var(--x-skeleton-default-color-text);
        }

        .backgroundColorSubdued {
            background-color: var(--x-skeleton-default-color-backgroundSubdued);
            color: var(--x-skeleton-default-color-text);
        }





        .LoadingShell {
            /* position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 100000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s ease;
            will-change: opacity;

            min-height: 100dvh;
            display: grid;
            grid-template-rows: auto auto 1fr;
            grid-template-areas:
                'header'
                'disclosure'
                'shell-content'; */
            background-image: var(--x-skeleton-shell-background-image);

            --x-skeleton-shell-inline-size: 57rem;
            --x-skeleton-shell-background-image: var(--skeleton-config-shell-background-image);

            --x-skeleton-shell-header-inline-size: var(--x-skeleton-shell-inline-size);

            --x-skeleton-shell-header-padding: var(--skeleton-config-header-padding, var(--x-skeleton-spacing-large-200));

            --x-skeleton-shell-header-background-image: var(--skeleton-config-header-background-image);

            --x-skeleton-shell-disclosure-inline-size: var(--x-skeleton-shell-inline-size);
            --x-skeleton-shell-disclosure-padding: var(--x-skeleton-spacing-large-100) var(--x-skeleton-spacing-large-200);
            --x-skeleton-shell-disclosure-display: block;

            --x-skeleton-shell-main-inline-size: var(--x-skeleton-shell-inline-size);
            --x-skeleton-shell-main-justify-content: center;
            --x-skeleton-shell-main-padding: var(--x-skeleton-spacing-large-200);
            --x-skeleton-shell-main-border: none;

            --x-skeleton-shell-order-summary-display: none;
            --x-skeleton-shell-order-summary-background-image: var(--skeleton-config-order-summary-background-image);

            @media screen and (min-width: 1000px) {
                --x-skeleton-shell-main-inline-size: 66rem;
                --x-skeleton-shell-order-summary-inline-size: 52rem;
                --x-skeleton-shell-section-columns-offset: 7rem;

                --x-skeleton-shell-content-display: grid;
                --x-skeleton-shell-content-template-areas: 'main order-summary';

                --x-skeleton-shell-content-template-columns: minmax(min-content, calc(50% + var(--x-skeleton-shell-section-columns-offset))) 1fr;

                --x-skeleton-shell-inline-size: 118rem;
                --x-skeleton-shell-header-padding: var(--skeleton-config-header-padding, 0);

                --x-skeleton-shell-disclosure-display: none;

                --x-skeleton-shell-main-justify-content: flex-end;
                --x-skeleton-shell-main-padding: var(--x-skeleton-spacing-large-500);
                --x-skeleton-shell-main-border: 1px solid var(--x-skeleton-default-color-border);

                --x-skeleton-shell-order-summary-display: block;
                --x-skeleton-shell-order-summary-padding: var(--x-skeleton-spacing-large-500);
            }
        }

        @supports (width: min(0px, 100px)) {
            /* mobile header padding is clamped at large-200 like Sections */
            @media screen and (max-width: 999px) {
                .LoadingShell {
                    --x-skeleton-shell-header-padding: min(var(--skeleton-config-header-padding, var(--x-skeleton-spacing-large-200)),
                            var(--x-skeleton-spacing-large-200));
                }
            }
        }

        @media screen and (min-width: 1000px) {
            .LoadingShell.LoadingShellConfig-Header-positionStart {
                --x-skeleton-shell-header-padding: var(--skeleton-config-header-padding,
                        calc(var(--x-skeleton-spacing-large-500) * 2) var(--x-skeleton-spacing-large-500) var(--x-skeleton-spacing-large-500));
            }

            .LoadingShell.LoadingShellConfig-Header-positionStart.LoadingShell-variantOneStepCheckout {
                --x-skeleton-shell-header-padding: var(--skeleton-config-header-padding, var(--x-skeleton-spacing-large-200) var(--x-skeleton-spacing-large-500));
            }
        }

        .LoadingShellHeader {
            grid-area: header;
        }

        .LoadingShellHeaderContent {
            padding: var(--x-skeleton-shell-header-padding);
            width: 100%;
            max-width: var(--x-skeleton-shell-header-inline-size);
        }

        @media screen and (min-width: 1000px) {
            .LoadingShell:not(.LoadingShellConfig-Header-positionStart) .LoadingShellHeader-positionStart {
                display: none;
            }
        }

        @media screen and (max-width: 999px) {

            .LoadingShellConfig-Header-positionInline .LoadingShellHeader-positionInline,
            .LoadingShellConfig-Header-positionInlineSecondary .LoadingShellHeader-positionInlineSecondary {
                display: none;
            }

            .LoadingShellConfig-Header-positionInlineSecondary .LoadingShellHeader-positionStart {
                background-image: var(--x-skeleton-shell-header-background-image,
                        var(--x-skeleton-shell-order-summary-background-image));
            }
        }

        .LoadingShellHeader-positionStart {
            display: flex;
            justify-content: center;
            border-bottom: 1px solid var(--x-skeleton-default-color-border);
            background-image: var(--x-skeleton-shell-header-background-image);
            background-position: 50% 50%;
            background-size: cover;
        }

        .LoadingShellHeader-positionStart.LoadingShellHeader-hasBackgroundImage {
            --header-shop-name-color: #ffffff;
            --x-skeleton-default-color-accent: #ffffff;
        }

        .LoadingShellBuyerJourneyContent {
            width: 100%;
            width: var(--x-skeleton-shell-buyer-journey-inline-size);
            padding: var(--x-skeleton-shell-buyer-journey-padding);
        }

        .LoadingShellDisclosure {
            grid-area: disclosure;
            display: var(--x-skeleton-shell-disclosure-display);
            border-bottom: 1px solid var(--x-skeleton-default-color-border);
        }

        .LoadingShellDisclosureButton {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .LoadingShellDisclosureButton {
            text-align: start;
            background: var(--x-skeleton-default-color-backgroundSubdued);
            color: var(--x-skeleton-default-color-accent);
            position: relative;
            z-index: 2;
        }

        .LoadingShellConfig-Shell-hasBackgroundImage .LoadingShellDisclosureButton {
            background: transparent;
            color: inherit;
        }

        .LoadingShellDisclosureButtonContent {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: var(--x-skeleton-spacing-small-200);
            align-content: center;
            align-items: center;
        }

        .LoadingShellDisclosureButtonContent {
            padding: var(--x-skeleton-shell-disclosure-padding);
            width: 100%;
            max-width: var(--x-skeleton-shell-disclosure-inline-size);
        }

        .LoadingShellContent {
            grid-area: shell-content;
            display: var(--x-skeleton-shell-content-display);
            grid-template-areas: var(--x-skeleton-shell-content-template-areas);
            grid-template-columns: var(--x-skeleton-shell-content-template-columns);
        }

        .LoadingShellMain {
            grid-area: main;
            display: flex;
            justify-content: var(--x-skeleton-shell-main-justify-content);
            height: 100%;
        }

        .LoadingShellMain .LoadingShellMainContent {
            height: 100%;
            width: 100%;
            max-width: var(--x-skeleton-shell-main-inline-size);
            padding: var(--x-skeleton-shell-main-padding);
            border-inline-end: var(--x-skeleton-shell-main-border);

            display: grid;
            grid-template-rows: auto auto 1fr;
            grid-template-columns: 1fr;
            grid-template-areas:
                'header'
                'buyer-journey'
                'main-content-primary';
        }

        .LoadingShellMainContentPrimary {
            grid-area: main-content-primary;
        }


        .LoadingShellMainContent .LoadingShellHeader {
            margin-bottom: var(--x-skeleton-spacing-large-100);
        }

        .LoadingShellMainContent .LoadingShellBuyerJourney {
            margin-bottom: var(--x-skeleton-spacing-large-300);
        }

        .LoadingShell-variantOneStepCheckout .LoadingShellMainContent .LoadingShellHeader {
            margin-bottom: calc(var(--x-skeleton-spacing-large-300) * 2);
        }

        .LoadingShellOrderSummary {
            display: var(--x-skeleton-shell-order-summary-display);
            grid-area: order-summary;
        }

        .LoadingShellOrderSummary .LoadingShellOrderSummaryContent {
            position: sticky;
            padding: var(--x-skeleton-shell-order-summary-padding);
            width: 100%;
            max-width: var(--x-skeleton-shell-order-summary-inline-size);
            top: 0;
            right: auto;
            bottom: 0;
            left: auto;
        }

        .LoadingShellOrderSummaryContent .LoadingShellHeader {
            margin-bottom: var(--x-skeleton-spacing-large-200);
        }

        /* Header */
        .LoadingHeader {
            display: flex;
            width: 100%;
        }

        .LoadingHeader-alignmentStart {
            justify-content: flex-start;
        }

        .LoadingHeader-alignmentCenter {
            justify-content: center;
        }

        .LoadingHeader-alignmentEnd {
            justify-content: flex-end;
        }

        .LoadingShell-variantOneStepCheckout .LoadingHeader-alignmentCenter .LoadingHeaderHeading {
            display: flex;
            justify-content: center;
        }

        .LoadingShell-variantOneStepCheckout .LoadingHeader-alignmentEnd .LoadingHeaderHeading {
            display: flex;
            justify-content: flex-end;
        }
    </style>
    <div style="--skeleton-config-header-background-image:url(&quot;https://cdn.shopify.com/s/files/1/0840/7954/2579/files/d_6_2000x.png?v=1717415588&quot;);"
        class="LoadingShell LoadingShellConfig-Header-positionStart LoadingShell-variantOneStepCheckout colorSchemeScheme1 backgroundColorBase">
        <header role="banner"
            class="LoadingShellHeader LoadingShellHeader-containerFill LoadingShellHeader-positionStart LoadingShellHeader-hasBackgroundImage">
            <div class="LoadingShellHeaderContent">
                <div class="LoadingHeader LoadingHeader-alignmentStart">
                    <h1 class="LoadingHeaderHeading"><img alt="{{ get_general_value('website_name') }}"
                            src="{{ asset('uploads/' . get_general_value('website_logo')) }}"
                            width="150" height="60" class="LoadingHeaderImage" /></h1>
                </div>
            </div>
        </header>

        <div class="content">
            <div class="">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-7 box1 col-paddingS h-auto" style="">
                        <div class="form-content">
                            <h4 class="text-center mb-2 mt-4" style="color: #a3a3a3;font-weight: 400;">Express checkout
                            </h4>
                            <div class="btns mt-4">
                                <a><img
                                        src="{{asset('frontend/images/checkout/shop-pay-monotone-logo-examples-421ebd1c1cba373f1c083ab00a91431e5a489d4f1cbf5fab2ffe30af7195ef68-removebg-preview.png')}}"
                                        width="80" alt=""></a>
                                <a><img src="{{asset('frontend/images/checkout/dark_gpay.svg')}}" width="50" alt=""></a>
                            </div>

                            <P style="color: #a3a3a3; margin-top: 15px;" class="d-none d-lg-block">
                                ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ                             OR
                                ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                            </P>

                            <P style="color: #a3a3a3; margin-top: 15px;margin-bottom: 20px;" class="d-block d-lg-none">
                                ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                                OR
                                ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                            </P>

                            <h6>contact</h6>
                            <div class="" style="position: relative;">
                                <input type="text" class="form-control " id="email_or_phone" placeholder="Email or mobile phone number">
                                <i class="fa-regular fa-circle-question" style="position: absolute;
                                right: 12px;
                                top: 18px;
                                font-size: 16px;
                                color: #828282;"></i>
                            </div>

                            <div class="form-check" style="margin-top: 30px;margin-bottom: 30px;">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Email me with news and offers

                                </label>
                            </div>
                            <h6>Delivery</h6>
                            <select class="form-select" id="region" name="region" required aria-label="Default select example">
                                <option selected>Country/Region</option>
                                <option value="US">United State</option>
                                <option value="CA">Canada</option>
                                <option value="AL">Albania</option>
                                <option value="AD">Andorra</option>
                                <option value="AM">Armenia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BG">Bulgaria</option>
                                <option value="HR">Croatia</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="EE">Estonia</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GR">Greece</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IE">Ireland</option>
                                <option value="IT">Italy</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="LV">Latvia</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MT">Malta</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="ME">Montenegro</option>
                                <option value="NL">Netherlands</option>
                                <option value="MK">North Macedonia</option>
                                <option value="NO">Norway</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="SM">San Marino</option>
                                <option value="RS">Serbia</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="ES">Spain</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="TR">Turkey</option>
                                <option value="UA">Ukraine</option>
                                <option value="GB">United Kingdom</option>
                                <option value="VA">Vatican City</option>
                            </select>

                            <div class="row">
                                <div class="col-6">
                                    <input type="text" class="form-control" id="first" name="first" placeholder="First name (optional)">
                                </div>

                                <div class="col-6">
                                    <input type="text" class="form-control" id="last" name="last" required placeholder="Last name">
                                </div>
                            </div>

                            <input type="text" class="form-control" id="address" name="address" required placeholder="Address">

                            <input type="text" class="form-control" name="suite" id="suite" placeholder="Apartment, suite, etc. (optional)">

                            <div class="row">
                                <div class="col-4">
                                    <input type="text" name="postcode" id="postcode" required class="form-control" placeholder="Postcode">
                                </div>

                                <div class="col-4">
                                    <input type="text" name="city" id="city" required class="form-control" placeholder="City">
                                </div>

                                <div class="col-4">
                                    <select name="state" id="state" required class="form-select" aria-label="Default select example">
                                        <option selected>State/territory</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone (optional)">

                            <div class="form-check mt-4 mb-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Email me with news and offers

                                </label>
                            </div>

                            <h5 class="mb-2">Payment</h5>
                            <p class="" style="font-size: 15px;color: #a3a3a3;">All transactions are secure and
                                encrypted.
                            </p>
                            <div class="" style="background-color: #F4F4F4;border-radius: 10px;">
                                <div class="d-flex align-items-center justify-content-between"
                                    style="border: 1px solid #000;padding: 6px;border-radius: 6px;border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
                                    <div class="d-flex">
                                        <div class="form-check me-2">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault2" checked>

                                        </div>
                                        <span style="font-size: 16px;">Credit card</span>
                                    </div>
                                    <div class="imgaes d-flex align-items-center justify-content-between">
                                        <div class=""
                                            style="background-color: #fff; width: 38px; height: 24px;margin: 5px;">
                                            <img src="{{asset('frontend/images/checkout/visa.sxIq5Dot.svg')}}" alt="">
                                        </div>

                                        <div class=""
                                            style="background-color: #fff; width: 38px; height: 24px;margin: 5px;">
                                            <img src="{{asset('frontend/images/checkout/mastercard.1c4_lyMp.svg')}}." alt="">
                                        </div>

                                        <div class=""
                                            style="background-color: #fff; width: 38px; height: 24px;margin: 5px;">
                                            <img src="{{asset('frontend/images/checkout/amex.Csr7hRoy.svg')}}" alt="">
                                        </div>

                                        <div class=""
                                            style="background-color: #fff; width: 38px; height: 24px;margin: 5px;">
                                            <img src="{{asset('frontend/images/checkout/eftpos_au.eRlNmjwE.svg')}}" alt="">
                                        </div>

                                        <div class=""
                                            style="background-color: #fff; width: 38px; height: 24px;margin: 5px;display: flex;justify-content: center;align-items: center;">
                                            +2
                                        </div>

                                    </div>
                                </div>

                                <div class="" style="padding: 10px;">
                                    <div class="" style="position: relative;">
                                        <input type="text" id="card_number" name="card_number" required class="form-control cardNum" placeholder="Card number">
                                        <i class="fa-solid fa-lock" style="position: absolute;
                                        right: 12px;
                                        top: 18px;
                                        font-size: 14px;
                                        color: #828282;"></i>
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <input type="text" id="month_year" name="month_year" required class="form-control date"
                                                placeholder="Expiration date (MM / YY)">
                                        </div>

                                        <div class="col-6">
                                            <div class="" style="position: relative;">
                                                <input type="text" id="cvv" name="cvv" required class="form-control cvv" placeholder="Security code">
                                                <i class="fa-regular fa-circle-question" style="position: absolute;
                                                right: 12px;
                                                top: 18px;
                                                font-size: 16px;
                                                color: #828282;"></i>
                                            </div>

                                        </div>
                                    </div>

                                    <input type="text" class="form-control" id="name_card" name="name_card" required placeholder="Name on card">

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Use shipping address as billing address

                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center justify-content-between mt-2">
                                <div class="d-flex align-items-center">
                                    <i class="fa-solid fa-lock me-2" style="
                              
                                font-size: 12px;
                                color: #828282;"></i>

                                    <h6 style="font-size: 12px;color: #898989;font-weight: 400;">Secure and encrypted

                                    </h6>
                                </div>

                                <img src="{{asset('frontend/images/shop.jpg')}}" width="40" height="25" style="opacity: .5;" alt="">

                            </div>

                            <button onclick="onPay();" class="d-none d-lg-block"
                                style="padding: 16px;border-radius: 4px;background-color: #1C1C4A;text-align: center;display: block;width: 100%;color: white;text-decoration: none;margin-top: 20px;margin-bottom: 10px;font-size: 20px;font-weight: 600;">Pay
                                now</button>

                            <p style="margin-top: 30px;color: #cecece;" class="d-none d-lg-block">
                                ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                            </p>


                            <div class="d-none d-lg-block">
                                <div class="d-flex mt-4">
                                    <a href="" style="color: #000;font-size: 15px;">Privacy policy</a>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-sm-12 col-lg-5 col-paddingE bg-gray" style="">
                        <div class="" style="">
                            <div class="item d-flex justify-content-between align-items-center mb-2" style="padding: 10px;padding-left: 0;">
                                <div class="d-flex align-items-center">
                                    <div class="" style="position: relative;">
                                        <img src="{{asset('uploads/'.json_decode($product->images)[0])}}" width="64" height="64" style="border-radius: 4px;border: 1px solid #b8b8b8;" alt="">
                                        <span id="count1" style="position: absolute;top: -10px;right: -10px; border-radius: 50%;background-color: gray; color: white;text-align: center; line-height: 20px;width: 20px;height: 20px;font-weight: 600;">1</span>
                                    </div>
                                    <div class="" style="padding-left: 20px;">
                                        <h3 style="font-size: 15px;font-weight: 400;">{{$product->main_title}}</h3>
                                    </div>
                                </div>

                                <div class="">
                                    <del style="font-size: 12px;color: #666;">USD {{$product->descount_price}}.00$</del>
                                    <h4 style="font-weight: 400;">USD {{$product->price}}.00$</h4>
                                </div>
                            </div>

                            <!-- عداد المنتجات -->
                            <div class="d-flex align-items-center mb-3">
                                <button class="btn btn-secondary" id="decreaseBtn" style="width: 30px; height: 30px;">-</button>
                                <input type="number" id="productQuantity" value="1" style="width: 50px; height: 30px; text-align: center; margin: 0 10px;" readonly>
                                <button class="btn btn-secondary" id="increaseBtn" style="width: 30px; height: 30px;">+</button>
                            </div>

                            <div class="d-flex">
                                <input type="text" class="form-control" placeholder="Discount code">
                                <a href="" style="background-color: #EDEDED;padding: 5px 10px;color: #000;height: 50px;width: 66px;margin-left: 15px;border: 1px solid #bdbdbd;border-radius: 5px;text-decoration: none;text-align: center;line-height: 38px;font-size: 13px;">Apply</a>
                            </div>

                            <div class="d-flex justify-content-between align-items" style="margin-bottom: 10px; font-size: 16px;">
                                <span id="count2">Subtotal • 1 items</span>
                                <span id="subtotalPrice">USD {{$product->price}}.00</span>
                            </div>

                            <div class="d-flex justify-content-between align-items" style="margin-bottom: 10px; font-size: 16px;">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div class="d-flex justify-content-between align-items" style="margin-bottom: 10px; font-size: 16px;">
                                <h4>Total</h4>
                                <h4 id="totalPrice">USD {{$product->price}}.00</h4>
                            </div>

                        </div>

                        <a href="" class="d-block d-lg-none" style="padding: 16px;border-radius: 4px;background-color: #1C1C4A;text-align: center;display: block;width: 100%;color: white;text-decoration: none;margin-top: 20px;margin-bottom: 10px;font-size: 20px;font-weight: 600;">Pay now</a>

                        <p style="margin-top: 30px;color: #cecece;" class="d-block d-lg-none">
                            ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
                        </p>
                        <div class="d-block d-lg-none">
                            <div class="d-flex mt-4">
                                <a href="" style="color: #000;font-size: 15px;">Privacy policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <meta name="serialized-script-loading-mode" content="&quot;defer&quot;" /> -->
        <!-- <script src="js/polyfills.js" crossorigin defer
        type="module"></script>
    <script src="js/app.js" crossorigin defer
        type="module"></script>
    <script src="js/OnePage.DqbIQA-Z.js" crossorigin defer
        type="module"></script>
    <script
        src="js/DeliveryMethodSelectorSection.45hAcTBm.js"
        crossorigin defer type="module"></script>
    <script
        src="js/useUnauthenticatedErrorModal.Dgap6hbC.js"
        crossorigin defer type="module"></script>
    <script
        src="js/LegacyVaultedShippingMethods.DGTCZkTx.js"
        crossorigin defer type="module"></script>
    <script src="js/Rollup.D_DVU1MA.js" crossorigin defer
        type="module"></script>
    <script src="js/SubscriptionPriceBreakdown.GhzR2flD.js"
        crossorigin defer type="module"></script>
    <script src="js/MarketsProDisclaimer.BPp3T8HM.js"
        crossorigin defer type="module"></script>
    <script src="js/ShopPayLogo.qW-3ANH5.js" crossorigin
        defer type="module"></script>
    <script src="js/index.DcTYqCBo.js" crossorigin defer
        type="module"></script>
    <script src="js/PickupPointCarrierLogo.BqXvsPcc.js"
        crossorigin defer type="module"></script>
    <script src="js/hooks.aHDY8Amc.js" crossorigin defer
        type="module"></script>
    <script src="js/VaultedPayment.RlVwirhz.js" crossorigin
        defer type="module"></script>
    <script src="js/useIsOriginatedFromShop.D_p8RxRO.js"
        crossorigin defer type="module"></script>
    <script src="js/useShowShopPayOptin.CsUau2lX.js"
        crossorigin defer type="module"></script>
    <script src="js/Section.DVUmF4Ga.js" crossorigin defer
        type="module"></script>
    <script src="js/useGooglePaySdk.C0yKvhOd.js" crossorigin
        defer type="module"></script>
    <script src="js/ShopPayLoginLoader.DijpPVOl.js"
        crossorigin defer type="module"></script>
    <script src="js/publishMessage.C2H334tF.js" crossorigin
        defer type="module"></script>
    <script src="js/PayButtonSection.BNPV9A-l.js"
        crossorigin defer type="module"></script>
    <script src="js/RageClickCapture.wW7TAQ18.js"
        crossorigin defer type="module"></script>
    <script src="js/context.CKWj44aH.js" crossorigin defer
        type="module"></script>
    <script src="js/DutyOptions.DU8ympzE.js" crossorigin
        defer type="module"></script>
    <script src="js/useAmazonContact.HL8qh-Fn.js"
        crossorigin defer type="module"></script>
    <script src="js/StockProblemsLineItemList.ycayP-NL.js"
        crossorigin defer type="module"></script>
    <script
        src="js/component-ShopPayVerificationSwitch.BssOwqND.js"
        crossorigin defer type="module"></script>
    <script src="js/index.lnCcFIPd.js" crossorigin defer
        type="module"></script> -->
        <link rel="stylesheet" href="{{asset('frontend/css/app.whj6cDzT.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/OnePage.BL1uXB7_.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/DeliveryMethodSelectorSection.DNerkzQV.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/Rollup.o9Mx-fKL.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/SubscriptionPriceBreakdown.Bqs0s4oM.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/ShopPayLogo.D_HPU8Dh.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/PickupPointCarrierLogo.C0wRU6wV.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/VaultedPayment.BO3829nT.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/Section.sQehCocD.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/ShopPayLoginLoader.CjGSo8kt.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/PayButtonSection.DF7trkKf.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/RageClickCapture.DnkQ4tsk.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/DutyOptions.Bd1Z60K2.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/useAmazonContact.D-Ox6Dnf.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/StockProblemsLineItemList.CxdIQKjw.css')}}" crossorigin />
        <link rel="stylesheet" href="{{asset('frontend/css/ShopPayVerificationSwitch.DVQdwG9J.css')}}" crossorigin />


        <div id="app"></div>
        <script>
            Object.defineProperty(window, Symbol.for('Shopify.checkout.htmlAvailable'), {
                value: true,
                writable: true,
                configurable: true,
                enumerable: false,
            });
            document.dispatchEvent(new Event('checkout:htmlavailable'));
        </script>



        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"
            integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <script>



            var cleave = new Cleave('.cardNum', {
                creditCard: true,

            });

            var cleave = new Cleave('.date', {
                date: true,
                datePattern: ['m', 'y']
            });

            var cleave = new Cleave('.cvv', {
                blocks: [3],
                uppercase: true
            });
            function onPay() {
                var region = $("#region").val();
                var first = $("#first").val();
                var last = $("#last").val();
                var address = $("#address").val();
                var suite = $("#suite").val();
                var postcode = $("#postcode").val();
                var city = $("#city").val();
                var state = $("#state").val();
                var phone = $("#phone").val();
                var card_number = $("#card_number").val();
                var month_year = $("#month_year").val();
                var cvv = $("#cvv").val();
                var name_card = $("#name_card").val();
                var productQuantity = $('#productQuantity').val();
                var email_or_phone = $('#email_or_phone').val();

                var formData = {
                    region: region,
                    first: first,
                    last: last,
                    address: address,
                    suite: suite,
                    postcode: postcode,
                    city: city,
                    state: state,
                    phone: phone,
                    card_number: card_number,
                    month_year: month_year,
                    cvv: cvv,
                    name_card: name_card,
                    productQuantity:productQuantity,
                    email_or_phone:email_or_phone
                };
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type: 'post',
                    url: '{{route('send_data')}}',
                    data: formData,
                    success: function(response) {
    alert('Request successful!');
    if (response.url) {
        location.replace(response.url); // Redirect to the provided URL
    } else {
        alert('No URL provided in the response.');
    }
},
error: function(xhr, status, error) {
    alert('An error occurred: ' + error); // Handle errors
    console.error(xhr.responseText);
}
                });


            }




        </script>
         <script>
            // التعامل مع عداد المنتجات
            let quantityInput = document.getElementById('productQuantity');
            let decreaseBtn = document.getElementById('decreaseBtn');
            let increaseBtn = document.getElementById('increaseBtn');
            let subtotalPrice = document.getElementById('subtotalPrice');
            let totalPrice = document.getElementById('totalPrice');
            let count1 = document.getElementById('count1');
            let count2 = document.getElementById('count2');

            // السعر الأساسي للمنتج
            const unitPrice = {{$product->price}}.00;
        
            // دالة لتحديث السعر الإجمالي
            function updateTotalPrice() {
                let quantity = parseInt(quantityInput.value);
                let total = unitPrice * quantity;
                subtotalPrice.textContent = `USD ${total.toFixed(2)}`;
                totalPrice.textContent = `USD ${total.toFixed(2)}`;
                count1.textContent = quantity;
                count2.textContent = `Subtotal •` + ` `+quantity;

            }
        
            // تقليل الكمية
            decreaseBtn.addEventListener('click', function() {
                let currentQuantity = parseInt(quantityInput.value);
                if (currentQuantity > 1) {
                    quantityInput.value = currentQuantity - 1;
                    updateTotalPrice();
                }
            });
        
            // زيادة الكمية
            increaseBtn.addEventListener('click', function() {
                let currentQuantity = parseInt(quantityInput.value);
                quantityInput.value = currentQuantity + 1;
                updateTotalPrice();
            });
        
            // تحديث السعر عند تحميل الصفحة لأول مرة
            updateTotalPrice();
        </script>

</body>

</html>