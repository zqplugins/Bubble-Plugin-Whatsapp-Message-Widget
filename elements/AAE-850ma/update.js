function(instance, properties, context) {
    instance.data.wp.empty();

    instance.data.wp.floatingWhatsApp({
        phone: properties.phone_number,
        popupMessage: properties.popup,
        showPopup: properties.showpopup,
        headerTitle: properties.header_title,
        headerColor: properties.header_color,
        position: properties.position,
        showOnIE: true,
        size:properties.icon_size+'px'
    });
    
    if (!!properties.responsive_positioning) {
        instance.canvas[0].style.removeProperty('--wpp-bottom');
        instance.canvas[0].style.removeProperty('--wpp-left');
        instance.canvas[0].style.removeProperty('--wpp-right');
        instance.canvas[0].style.removeProperty('--wpp-top');
        
        instance.canvas.css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible'
        });
        
        instance.canvas.css('--wpp-pos', 'relative');
    } else {
        instance.canvas[0].style.removeProperty('--wpp-pos');
        
        instance.canvas.css('--wpp-bottom', properties.bottom);
        instance.canvas.css('--wpp-left', properties.left);
        instance.canvas.css('--wpp-right', properties.right);
        instance.canvas.css('--wpp-top', properties.top);
    }
}