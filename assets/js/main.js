/*
	Retrospect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

    skel
        .breakpoints({
            xlarge: '(max-width: 1680px)',
            large: '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small: '(max-width: 736px)',
            xsmall: '(max-width: 480px)'
        });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Nav.
        $('#nav')
            .append('<a href="#nav" class="close"></a>')
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right'
            });

        // load csv data to web page
        function format_link(link) {
            if (link)
                return "<a href='" + link + "' target='_blank'>" + link + "</a>";
            else
                return "";
        }

        CsvToHtmlTable.init({
            csv_path: '../data/review.csv',
            element: 'table-container',
            allow_download: true,
            csv_options: { separator: ',', delimiter: '"' },
            datatables_options: { "paging": false },
            custom_formatting: [
                [4, format_link]
            ]
        });

    });

})(jQuery);