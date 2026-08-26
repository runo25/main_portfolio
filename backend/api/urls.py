from django.urls import path
#from rest_framework.routers import DefaultRouter
from .views import home, PortfolioView, PortfolioDetailView, PortfolioDeleteView, PortfolioUpdateView

urlpatterns = [
    path('',home, name='home'),
    path('api/v1/portfolio/', PortfolioView.as_view(), name='portfolio'),
    path('api/v1/portfolio/<int:pk>/', PortfolioDetailView.as_view(), name='portfolio_detail'),
    path('api/v1/portfolio/<int:pk>/delete/', PortfolioDeleteView.as_view(), name='portfolio_delete'),
    path('api/v1/portfolio/<int:pk>/update/', PortfolioUpdateView.as_view(), name='portfolio_update'),
]