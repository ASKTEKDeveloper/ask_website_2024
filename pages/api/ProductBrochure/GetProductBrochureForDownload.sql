SELECT TOP 1
    pm.ProductID,
    pm.ProductName,
    pm.ShortCode,
    pm.BrochureFileName,
    pm.IsActive
FROM
    Tbl_ProductMaster pm
WHERE
    pm.ShortCode = @ShortCode
    AND pm.IsActive = 'Y'
    AND NULLIF(LTRIM(RTRIM(pm.BrochureFileName)), '') IS NOT NULL;
