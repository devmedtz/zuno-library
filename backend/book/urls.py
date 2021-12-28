from django.urls import path

from .import views


urlpatterns = [
    path('books/', views.getBooks, name='books'),
    path('book/<str:id>/', views.getBook, name='book'),
    path('book/checkout/<str:id>/', views.getBookCheckout, name='book_checkout')
]