$(document).ready(() => {
    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    })

    // Top Sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // special price isotope filter
    let $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    })

    // filter items on button click
    $(".button-group").on("click", "button", function () {
        let filterValue = $(this).attr("data-filter")
        $grid.isotope({filter: filterValue})
    })

    // New phones owl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // blogs owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })

    // qty section
    let qty_up = $('.qty .qty-up')
    let qty_down = $('.qty .qty-down')

    qty_down.each((i, dom) => {
        $(dom).on('click', function () {
            let qty_input = $(`.qty .qty_input[data-id=${$(this).data('id')}]`)
            if (qty_input.val() > 1) {
                qty_input.val((i, oldVal) => {
                    return --oldVal
                })
            }
        })
    })
    qty_up.each((i, dom) => {
        $(dom).on('click', function () {
            let qty_input = $(`.qty .qty_input[data-id=${$(this).data('id')}]`)
            if (qty_input.val() < 9) {
                qty_input.val((i, oldVal) => {
                    return ++oldVal
                })
            }
        })
    })
    // qty_up.click(function (e) {
    //     if (qty_input.val() < 9) {
    //         qty_input.val((i, oldVal) => {
    //             return ++oldVal
    //         })
    //     }
    // })
})