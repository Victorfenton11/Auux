# Generated by Django 4.2.1 on 2023-05-29 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_room_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='votes_to_skip',
            field=models.IntegerField(default=1),
        ),
    ]