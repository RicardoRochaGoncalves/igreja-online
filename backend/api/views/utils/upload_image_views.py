from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage

@api_view(['POST'])
def upload_image(request):
    category = request.POST.get('category', 'general')  # Recebe a categoria de upload
    file = request.FILES.get('image')

    if file:
        file_name = default_storage.save(f'{category}/{file.name}', file)
        file_url = default_storage.url(file_name)
        return Response({'image_url': file_url}, status=status.HTTP_201_CREATED)

    return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)
