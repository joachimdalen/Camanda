<?php

namespace App\CA\Upload;

use App\CA\Upload\Model\Upload;

/**
 * Repository responsible of handling all database
 * interaction for the Upload model.
 */
class UploadRepository
{
    /**
     *
     * @var Upload
     */
    protected $model;

    /**
     * UploadRepository constructor.
     *
     * @param Upload $upload A Upload instance.
     */
    public function __construct(Upload $upload)
    {
        $this->model = $upload;
    }

    /**
     * Create a new upload record.
     *
     * @param array $data The data of the upload.
     *
     * @return void
     */
    public function create($data)
    {
        $created = $this->model->create($data);
        return $created;
    }

    /**
     * Get all uploads for a user.
     *
     * @param integer $userId   The if of the user to get uploads for.
     * @param boolean $paginate If the results should be paginated.
     * @param integer $pageSize The pagination size of the results.
     *
     * @return void
     */
    public function getForUser($userId, $paginate = true, $pageSize = 25)
    {
        $uploads = $this->model->where('user_id', $userId);
        if ($paginate) {
            $uploads = $uploads->paginate($pageSize);
        } else {
            $uploads = $uploads->get();
        }
        return $uploads;
    }
}
