from rest_framework import serializers

from .models import Media, CheckoutData


class MediaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Media
        fields = ('bibnum', 'title', 'author', 'isbn', 'publicationyear', 'publisher', 'subjects', 'itemtype', 'itemcount')


class CheckoutDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = CheckoutData
        fields = ('bibnumber', 'checkoutdatetime',)