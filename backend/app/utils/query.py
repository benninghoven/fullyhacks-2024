from llama_index import VectorStoreIndex, load_index_from_storage
from llama_index.storage.storage_context import StorageContext

# retrieve index from persisted storage context
def RetrieveFromStorageContext(collection) -> VectorStoreIndex:
    """
    :param: collection(str)
    :return: VectorStoreIndex
    """
    print('retrieving from collection: ', collection)
    storage_context = StorageContext.from_defaults(persist_dir=f"app/data/{collection}")
    index = load_index_from_storage(storage_context)
    return index

# retrieve llama index from storage context and query
def query(collection, prompt):
    print(collection)
    _index = RetrieveFromStorageContext(collection=collection)
    query_engine = _index.as_query_engine()
    return query_engine.query(prompt).response