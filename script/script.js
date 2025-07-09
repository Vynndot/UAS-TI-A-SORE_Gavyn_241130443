$(document).ready(function(){
    const discount_code1 = 'DISKON50';
    const discount_percentage1 = 0.50;

    $('.plus-btn').on('click', function(){
        let quantitySpan = $(this).siblings('.quantity');
        let currentquantity = parseInt(quantitySpan.text());
        quantitySpan.text(currentquantity + 1);
    }); 

    $('.minus-btn').on('click', function(){
        let quantitySpan = $(this).siblings('.quantity');
        let currentquantity = parseInt(quantitySpan.text());
        if (currentquantity > 0)
        quantitySpan.text(currentquantity - 1);
    }); 

    function calculateTotal(){
        let total = 0;
        $('.product-item').each(function(){
            let price = $(this).find(.price).data('Harga');
            let quantity = parseInt($(this).find('.quantity').text());
            total += harga * quantity;
            return total
        });
        
        $('#apply-btn').on('click', function() {
            const totalOriginal = calculateTotal();
            const enteredCode = $('#promo-code').val().trim().tolowerCase();
            const resultDisplay = $('#result-display');

            if (enteredCode === discount_code1){
                const discountAmount = totalOriginal * discount_percentage1;
                const finalprice = totalOriginal - discountAmount;
            
                const resultHTML =
                Harga Asli: $${totalOriginal.toFixed(2)}<br>
                diskon (50%): -$${discountAmount.toFixed(2)}<br>
                <strong>Total bayar: $${finalprice.toFixed(2)}</strong>
                resultDisplay.html(resultHTML).show();
        });
        $('#reset-btn').on('click', function(){
            $('order-form')[0].reset();
            $('.quantity').text('0');
            $('result-display').hide().html('');
        });
        $('#order-form').on('submit', function(event){
            event.preventDefault();
        })};
});