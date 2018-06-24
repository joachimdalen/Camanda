<?php

namespace App\CA\Upload;


use App\CA\Upload\Model\Upload;

class UploadRepository
{
    /**
     * @var Upload
     */
    private $model;

    /**
     * UploadRepository constructor.
     * @param Upload $upload
     */
    public function __construct(Upload $upload)
    {
        $this->model = $upload;
    }

    public function create($data)
    {
        $created = $this->model->create($data);
        return $created;
    }
}