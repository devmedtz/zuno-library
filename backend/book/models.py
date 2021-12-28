from django.db import models


class CheckoutData(models.Model):
    bibnumber = models.ForeignKey('Media', models.DO_NOTHING, db_column='BibNumber')  
    itembarcode = models.IntegerField(db_column='ItemBarcode', blank=True, null=True)  
    itemtype = models.ForeignKey('MediaType', models.DO_NOTHING, db_column='ItemType', blank=True, null=True)  
    callnumber = models.CharField(db_column='CallNumber', max_length=255, blank=True, null=True)  
    checkoutdatetime = models.CharField(db_column='CheckoutDateTime', max_length=255, blank=True, null=True)  

    class Meta:
        managed = False
        db_table = 'checkout_data'


class Media(models.Model):
    bibnum = models.IntegerField(db_column='BibNum', primary_key=True)  
    title = models.CharField(db_column='Title', max_length=255, blank=True, null=True)  
    author = models.CharField(db_column='Author', max_length=255, blank=True, null=True)  
    isbn = models.CharField(db_column='ISBN', max_length=255, blank=True, null=True)  
    publicationyear = models.IntegerField(db_column='PublicationYear', blank=True, null=True)  
    publisher = models.CharField(db_column='Publisher', max_length=255, blank=True, null=True)  
    subjects = models.CharField(db_column='Subjects', max_length=255, blank=True, null=True)  
    itemtype = models.ForeignKey('MediaType', models.DO_NOTHING, db_column='ItemType', blank=True, null=True)  
    itemcount = models.IntegerField(db_column='ItemCount', blank=True, null=True)  

    class Meta:
        managed = False
        db_table = 'media'


class MediaType(models.Model):
    code = models.CharField(db_column='Code', primary_key=True, max_length=255)  
    description = models.CharField(db_column='Description', max_length=255, blank=True, null=True)  
    codetype = models.CharField(db_column='CodeType', max_length=255, blank=True, null=True)  
    formatgroup = models.CharField(db_column='FormatGroup', max_length=255, blank=True, null=True)  
    formatsubgroup = models.CharField(db_column='FormatSubgroup', max_length=255, blank=True, null=True)  
    categorygroup = models.CharField(db_column='CategoryGroup', max_length=255, blank=True, null=True)  
    categorysubgroup = models.CharField(db_column='CategorySubgroup', max_length=255, blank=True, null=True)  

    class Meta:
        managed = False
        db_table = 'media_type'
