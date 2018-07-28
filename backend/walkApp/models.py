from django.db import models
from django.utils import timezone


class CommutePlan(models.Model):
    userID = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    currentLocation = models.TextField()
    destination = models.DestinationField()
    departureTime = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
