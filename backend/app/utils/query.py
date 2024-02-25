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
    index = load_index_from_storage(storage_context, dim=384)
    return index

# retrieve llama index from storage context and query
def query(collection, prompt):
    print(collection)
    index = RetrieveFromStorageContext(collection=collection)
    query_engine = index.as_query_engine()
    # prompt = "Given the a prompt, answer strictly from the context. The prompt will be in the format 'prompt': '{prompt}' If you cannot provide a sufficient answer, answer with \"Out of Context\":\n\n"
    # prompt = "prompt: " + prompt
    return query_engine.query(prompt).response