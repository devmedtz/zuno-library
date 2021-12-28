from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import MediaSerializer, CheckoutDataSerializer

from .models import Media, MediaType, CheckoutData


@api_view(['GET'])
def getBooks(request):

	books = Media.objects.all()
	serializer = MediaSerializer(books, many=True)
	return Response(serializer.data)


@api_view(['GET'])
def getBook(request, id):

	book = Media.objects.get(bibnum=id)

	serializer = MediaSerializer(book, many=False)

	return Response(serializer.data)


@api_view(['GET'])
def getBookCheckout(request, id):

	book_checkout = CheckoutData.objects.filter(bibnumber=id)

	checkout_serializer = CheckoutDataSerializer(book_checkout, many=True)

	return Response(checkout_serializer.data)