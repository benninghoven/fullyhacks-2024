from llama_index import VectorStoreIndex, load_index_from_storage
from llama_index.storage.storage_context import StorageContext

# from llama_index.memory import ChatMemoryBuffer
# memory = ChatMemoryBuffer.from_defaults(token_limit=1500)

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
    return query_engine.query(prompt).response

def chat(collection, prompt):
    print(collection)
    index = RetrieveFromStorageContext(collection=collection)
    # chat_engine = index.as_chat_engine()
    chat_engine = index.as_chat_engine(
        chat_mode="context",
        # memory=memory,
        system_prompt=(
            "You are an education chatbot. You are given a textbook as a context. You can only answer questions that is within your context information. If you cannot answer, say that the question is out of context"
        ),
    )
    return chat_engine.chat(prompt).response